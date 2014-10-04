var app = angular.module('mySite', ['ngRoute']);

app.controller('HomeController', ['$scope', function($scope) {
  $scope.greeting = "Hola!!";
}]);
