var app = angular.module('mySite', ['ui.router']);

app.controller('HomeController', ['$scope', function($scope) {
  $scope.greeting = "Hola!!";
}]);
