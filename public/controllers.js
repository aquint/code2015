angular.module('schoolPicker.controllers', [])

.controller('HomeCtrl', ['$scope','$http',function($scope, $http) {
	$http.get('values.json').success(function(data) {
	   $scope.programs = data;
	});
}])
.controller('ResultsCtrl', ['$scope', 'GlassDoor','$stateParams' ,function($scope, GlassDoor, $stateParams) {
	GlassDoor.get({jobId: $stateParams.jobId}, function(jobs){
		console.log(angular.fromJson(jobs));
		$scope.jobs = angular.fromJson(jobs);
	});
}]);