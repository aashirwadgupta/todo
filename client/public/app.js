'use strict';
var myApp = angular.module('myApp', ['ui.router', 'ngStorage', 'ngTable']);

myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
    $urlRouterProvider.otherwise('/');
    $urlMatcherFactoryProvider.strictMode(false);
    
    $stateProvider
    .state('app', {
        url: '/',
        templateUrl: 'app/app.html',
        controller: 'AppCtrl'
    })
    .state('todos', {
        url: '/todos',
        templateUrl: 'app/todo/todo.html',
        controller: 'ToDoCtrl'
    })
    .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl'
    });
    $locationProvider.html5Mode(true);
}).run(function () {

}); 
