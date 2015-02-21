angular.module('schoolPicker.services', [])
	.factory('GlassDoor', ['$http', function($http){
		return {
			connect: function(){
				$http.json('http://api.glassdoor.com/api/api.htm?t.p=30388&t.k=jpWWyz7UblO&userip=0.0.0.0&useragent=&format=json&v=1&action=jobs-stats&returnStates=true&admLevelRequested=1')
					.success(function(data){
						$scope.data = angular.fromJson(data);
					});
			}
		}
	}]);