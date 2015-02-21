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
	$stateProvider.state('', {
		url: '/',
		controller: '',
		templateUrl: ''
	})
	.state('', {
		url: '/',
		controller: '',
		templateUrl: ''
	})
	.state('', {
		url: '/',
		controller: '',
		templateUrl: ''
	});
	$urlRouterProvider.otherwise('');
}]);
