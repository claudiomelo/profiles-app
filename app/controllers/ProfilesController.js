(function(){
	'use strict';
	angular
		.module('app.core')
		.controller('ProfilesController', ProfilesController, function($rootScope, $timeout, $http){});

		ProfilesController.$inject = ['$rootScope', '$timeout', '$http', 'API', '$window'];


		function ProfilesController($rootScope, $timeout, $http, API, $window){

			$rootScope.profilesData = {}
        
	        $rootScope.list = function list(start){
	        	start =  typeof start == 'undefined' ? 0 : start;
		        console.log(start);

		        $http({
		            url: API.url + 'getAll/'+start,
		            method: 'get',
		        }).then(function(response) {
		            $rootScope.profilesData = Object.assign($rootScope.profilesData, response.data.data);
		        },
		        function(response) {

		        });
	        } 

	        $rootScope.list();

	        var scroolDown = 0;
			var lastScroolTop = 0;

			angular.element($window).bind("scroll", function(e) {
			    if (lastScroolTop < $(this).scrollTop()) {
					scroolDown++;
				}

				lastScroolTop = $(this).scrollTop();	

			    if (scroolDown % 20 == 0) {
			   	   $rootScope.list(Object.keys($rootScope.profilesData).length + 6);
			    }
			});

	        $rootScope.remove =  function remove(id){
	        	$http({
		            url: API.url + 'delete/'+id,
		            method: 'DELETE',		          
		        }).then(function(response) {

		            delete $rootScope.profilesData['profile_'+id];

		            $rootScope.list();

		            var el = document.getElementById('profile-'+id);
					el.parentNode.removeChild(el);
		        },
		        function(response) {
		        });
	        };
		}
})();