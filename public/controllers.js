angular.module('schoolPicker.controllers', [])

.controller('HomeCtrl', ['$scope', 'GlassDoor', function($scope, GlassDoor) {
	GlassDoor.connect();
}]);