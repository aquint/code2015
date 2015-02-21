'use strict';

// Declare app level module which depends on views, and components
angular.module('schoolPicker', [
  'ngRoute',
  'ui.router',
  'ngAnimate',
  'ngResource',
  'myApp.version'
])

.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$stateProvider.state('home', {
		url: '/',
		controller: 'HomeCtrl',
		templateUrl: 'home.html'
	});
	$urlRouterProvider.otherwise('/');
}])

.controller('HomeCtrl', function ($scope, $http) {
    $scope.selectedTestAccount = null;
    $scope.testAccounts = [];

    $http({
            method: 'GET',
            url: '/Admin/GetTestAccounts',
            data: { applicationId: 3 }
        }).success(function (result) {
        $scope.testAccounts = result;
    });
});