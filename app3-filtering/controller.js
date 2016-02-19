angular.module('myApp').controller('mainController', function($scope, dataService) {
  $scope.array = dataService.getData();
  $scope.searchPredicate = "";
})
