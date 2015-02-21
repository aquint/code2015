'use strict';

// Declare app level module which depends on views, and components
angular.module('schoolPicker', [
  'ngRoute',
  'ui.router',
  'ngAnimate',
  'ngResource',
  'myApp.version',
  'schoolPicker.controllers',
  'schoolPicker.directives',
  'schoolPicker.services'
])

.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$stateProvider.state('home', {
		url: '/',
		controller: 'HomeCtrl',
		templateUrl: 'home.html'
	});
	$urlRouterProvider.otherwise('/');
}])