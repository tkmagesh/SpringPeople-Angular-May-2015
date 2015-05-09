'use strict';

angular.module('myApp.greetView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/greet', {
    templateUrl: 'greetView/greet.html',
    controller: 'greetController'
  });
}])

.controller('greetController', function($scope) {
    $scope.name = '';
    $scope.greetMsg = '';
    $scope.greet = function(){
        $scope.greetMsg = 'Hi ' + $scope.name + ', Have a nice day!';
    }
});
