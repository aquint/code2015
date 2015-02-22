angular.module('schoolPicker.controllers', [])

.controller('HomeCtrl', ['$scope','$http',function($scope, $http) {
	$http.get('values.json').success(function(data) {
	   $scope.programs = data;
	});
}])
.controller('ResultsCtrl', ['$scope', 'GlassDoor','$stateParams', '$http' ,function($scope, GlassDoor, $stateParams, $http) {
	GlassDoor.get({jobId: $stateParams.jobId}, function(jobs){
		console.log(angular.fromJson(jobs));
		$scope.jobs = angular.fromJson(jobs);
	});
	$scope.program = {};
	$http.get('values.json').success(function(data) {
	   for (var i = data.length - 1; i >= 0; i--) {
	   	if(data[i].id == $stateParams.jobId){
	   		$scope.program = data[i];
	   	}
	   };
	});
	$http.get('GraduatesPerProgramPerProvinceJSON.json').success(function(data) {
		$scope.graduatesPerProvince = [];
	    for (var i = data.length - 1; i >= 0; i--) {
	   	if(data[i].Program == $scope.program.map){
	   		$scope.graduatesPerProvince.push(data[i]);
	   	}
	   };
	});
	$scope.showGrads = function(province){
		for (var i = $scope.graduatesPerProvince.length - 1; i >= 0; i--) {
			if ($scope.graduatesPerProvince[i].City == province) {
				return $scope.graduatesPerProvince[i].num
			};
		};
		return 0;
	}
}]);