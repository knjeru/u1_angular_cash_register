'use strict';


// name your angular app here
angular.module('myApp', ['ui.router', 'door3.css'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/register');

  $stateProvider
    .state('register', {
      url: '/register',
      templateUrl: '/app/cash_register/views/main.html',
      controller: 'mainCtrl',
      css: '/css/main.css'
    });

}]);
