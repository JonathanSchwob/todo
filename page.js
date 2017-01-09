angular.module('pageModule', [])


.controller('pageController', function($scope, $http) {
  // $scope.exampleText = 'wtfs';
  $http.get('server.js')
  .then(function (response) {
    $scope.httpRequest = response.data;
  });
  $scope.myInput = '';
  $scope.newTodo = [];
  $scope.addTodo = function() {
    $scope.newTodo = $scope.newTodo.concat($scope.myInput);
    $scope.myInput = '';
  };

  //make http request
  //server sends back var
  //set server response as variable on $scope
  //render variable in view
});

