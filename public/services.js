angular.module('schoolPicker.services', [])
	.factory('GlassDoor', ['$resource', function($resource){
		return $resource('/api/glassdoor/:jobId', {jobId: '@jobId'});
	}]);