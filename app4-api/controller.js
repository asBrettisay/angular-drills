angular.module('apiApp')
.controller('mainController', function($scope, swSvc) {

  swSvc.getStarships().then(function(response) {
    $scope.starships = response;
  })

})
