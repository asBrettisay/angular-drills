angular.module('myApp')
.controller('mainCtrl', function($scope, starshipPromise) {
  $scope.starships = starshipPromise;
})
