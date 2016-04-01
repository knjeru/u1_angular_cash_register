'use strict';

// put component controllers here
angular.module('myApp')
.controller('mainCtrl',['$scope', function($scope) {

  $scope.register = [];
  $scope.subtotal = 0;
  $scope.tax = 0;
  $scope.gTotal = 0;

  $scope.pizza = {
    'id': 1,
    'name': 'Pizza',
    'price': 9.99,
    'ogPrice': '9.99',
    'quantity': 1
  };

  $scope.salad = {
    'id': 2,
    'name': 'Salad',
    'price': 5.99,
    'ogPrice': '5.99',
    'quantity': 1
  };

  $scope.burger = {
    'id': 3,
    'name': 'Burger',
    'price': 12.99,
    'ogPrice': '12.99',
    'quantity': 1
  };

  $scope.chzburger = {
    'id': 4,
    'name': 'Cheeseburger',
    'price': 12.99,
    'ogPrice': '12.99',
    'quantity': 1
  };

  $scope.checkRegister = function(item) {
    var i = $scope.register.indexOf(item);

    if ($scope.register.indexOf(item) !== -1) {
          $scope.register[i].quantity++;
          $scope.register[i].price += parseInt(item.ogPrice);
          $scope.subtotal += parseInt(item.ogPrice);
          $scope.tax += (item.price * 0.0436);
          $scope.gTotal = $scope.subtotal + $scope.tax;
    } else {
          $scope.register.push(item);
          $scope.subtotal += parseInt(item.ogPrice);
          $scope.tax += (item.price * 0.0436);
          $scope.gTotal = $scope.subtotal + $scope.tax;
    }
  };

}]);
