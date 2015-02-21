'use strict';

// Declare app level module which depends on views, and components
angular.module('schoolPicker', [
  'ui.router',
  'ngAnimate',
  'ngResource',
  'myApp.version',
  'schoolPicker.controllers',
  'schoolPicker.directives',
  'schoolPicker.services'
])
.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
])
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$stateProvider.state('home', {
		url: '/',
		controller: 'HomeCtrl',
		templateUrl: 'views/home.html'
	});
	$urlRouterProvider.otherwise('/');
}])