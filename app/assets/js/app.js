/*Project module name*/
(function(){
	angular.module('profilesApp', [
				'app.core',
				'app.settings',
				'app.routes'
			]);
})();

/*app core*/
(function(){
	angular.module('app.core', [
		/*core dependencies inject libraries*/
				'ngRoute',
				'ngAnimate',
				'ngStorage',
				'ngCookies',
				'ui.router',
				'oc.lazyLoad',/*Load the files dynamically*/
				'ngSanitize',
				'ngResource'
			]);
})();

/*app global settings*/
(function(){
	angular.module('app.settings', []);
})();


/*lazyload to load files*/
(function(){
	angular.module('app.lazyLoad', []);
})();

/*route lazyload*/
(function(){
	angular.module('app.routes', [
		/*core dependencies*/
				'app.lazyLoad'
			]);
})();