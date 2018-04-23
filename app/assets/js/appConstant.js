(function(){
	'use strict';
	/* APP_REQUIRES files that will be loaded */
	angular
		.module('app.lazyLoad')
		.constant('APP_REQUIRES', {
			/*Scripts*/
			scripts:{},

			/*Service and Controllers*/
			modules: {
					profiles: [
						'app/controllers/ProfilesController.js',
						'app/services/ProfilesService.js'
					]					
				}
		});
	
	/* API */
	angular
		.module('app.core')
		.constant('API', {
			url: 'http://localhost:3000/profiles/',
			api_setting: {
				list  : 		{method: 'GET'},
				remove: 		{method: 'DELETE'}
			}
		});
})();