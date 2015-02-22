angular.module('schoolPicker.controllers', [])

.controller('HomeCtrl', ['$scope', 'GlassDoor','$http' ,function($scope, GlassDoor, $http) {
	GlassDoor.get(function(jobs){
		console.log(angular.fromJson(jobs));
		$scope.jobs = angular.fromJson(jobs);
	});
	$http.get('values.json').success(function(data) {
	   $scope.programs = data;
	});
}]);