/*Routes*/
(function(){
	'use strict';
	angular
		.module('app.routes')
		.config(routesConfig);

		routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelperProvider', 'APP_REQUIRES'];

		function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, RouteHelper, APP_REQUIRES){
			// removing (#) of the url
			$locationProvider.html5Mode(true); 

			//create states
			$stateProvider
				.state('app', {
					url: '',
					abstract: true,
					templateUrl: RouteHelper.path('app.html'),
					params: {
						id:null,
						action: null
					}
				})
				.state('app.profiles', {
					url: '/',
					title: 'Profiles',
					templateUrl: RouteHelper.path('profiles.html'),
					resolve: RouteHelper.loadFiles('profiles'),		
					controller: 'ProfilesController',
					controllerAs: 'profiles',
				})			
				.state('page', {
					url: '/page/',
					abstract: true,
					templateUrl: RouteHelper.path('pages/app.html')

				})
				.state('page.404',{
					title: 'Page Not Found',
					url: '404',
					templateUrl: RouteHelper.path('pages/404.html'),
				})
				.state('page.403',{
					title: 'Page Not Found',
					url: '403',
					templateUrl: RouteHelper.path('pages/403.html'),
				});

			$urlRouterProvider.otherwise('/page/404');		
		}
})();

(function(){
	angular
		.module('app.routes')
		.provider('RouteHelper', RouteHelperProvider);

	RouteHelperProvider.$inject = ['APP_REQUIRES'];
	
	function RouteHelperProvider(APP_REQUIRES){
		return {
			path: path,
			loadFiles:loadFiles,
			$get: function(){
				return {
					path:path,
					loadFiles:loadFiles,
				};
			}
		};

		/*serve para economizar código*/
		function path(url){
			return 'app/views/' + url;
		};

		function loadFiles(files){
			return {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: files,
                        insertBefore: '#ng_load_plugins_before',
                        files: APP_REQUIRES.modules[files]
                    });
                }]
            }
		}		
	};

})();