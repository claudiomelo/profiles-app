 /*core configuration*/
 (function() {
 	'use strict';
 	angular
 		.module('app.core')
 		.config(coreConfig);

 		/*Rewrite some inicialization to not get any conflits*/
 		coreConfig.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide'];
 		function coreConfig($controllerProvider, $compileProvider, $filterProvider, $provide){
 			var core = angular.module('app.core');
 			core.controller = $controllerProvider.register;
 			core.directive  = $compileProvider.directive;
 			core.filter     = $filterProvider.register;
 			core.factory    = $provide.factory;
 			core.service    = $provide.service;
 			core.constant   = $provide.constant;
 			core.value      = $provide.value;

 			$compileProvider.debugInfoEnabled = false; //only to optimize
 		}
 })();

/*execute global configurations*/
(function(){
	'use strict';
 	angular
 		.module('app.settings')
 		.run(settingsRun);

 		settingsRun.$inject = ['$rootScope', '$localStorage', '$state','$stateParams', '$transitions']
 		function settingsRun($rootScope, $localStorage, $state, $stateParams, $transitions) {
 			var urlBase = window.location.origin;

 			$rootScope.app = {
 				url_base: urlBase + '/profiles-app/',
 				title: 'Angular JS Sample Profiles',
 				description: 'Angular JS Sample Profiles, created with angular and node',
 				keywords: 'AngularJS, html,js,css, node, api',
 			}; 			

 			$transitions.onSuccess({}, function() {
				$rootScope.app.title = $state.current.title || $rootScope.app.title; //set the actual title
			}); 				
 		}
 })();

/*Configuering o lazyload*/
(function (){
	'use strict';
 	angular
 		.module('app.lazyLoad')
 		.config(lazyLoadConfig);

 		lazyLoadConfig.$inject = ['$ocLazyLoadProvider', 'APP_REQUIRES'];

 		function lazyLoadConfig($ocLazyLoadProvider, APP_REQUIRES){
 			$ocLazyLoadProvider.config({
 				debug: false,/*show the order of the loaded files*/
 				modules: APP_REQUIRES.modules
 			});
 		}
 })();

 /*Configuering soma settings*/
(function (){
	'use strict';
 	angular
 		.module('app.settings')
 		.config(settingConfig);

 		settingConfig.$inject = ['$resourceProvider', 'API'];

 		function settingConfig($resourceProvider, API){
 			$resourceProvider.defaults.actions = API.api_setting;
 		}
 })();



