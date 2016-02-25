angular.module('myApp')
.directive('loginDirective', function() {
  return {
    templateUrl: 'login.html',
    controller: function($scope) {
      $scope.login = function() {
        alert('Login successful!');
      }
    }
  }
})
