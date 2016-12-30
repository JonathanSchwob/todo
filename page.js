angular.module('pageModule', [])

.controller('pageController', function($scope) {
  // $scope.exampleText = 'wtfs';
  $scope.myInput = 'default';
  $scope.newTodo = '';
  $scope.log = function() {
    console.log($scope);
  };
  $scope.addTodo = function() {
    $scope.newTodo = $scope.newTodo.concat($scope.myInput);
  };
});