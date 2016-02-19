angular.module('arrayApp').controller('arrayController', function($scope, arrayService) {

  $scope.array = arrayService.getData();

})
