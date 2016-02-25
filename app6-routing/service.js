angular.module('myApp')
.service('starshipService', function($http, $q) {



  this.getStarships = function() {
    var defer = $q.defer();

    $http({
      method: 'GET',
      url: "http://swapi.co/api/starships/"
    }).then(function(response) {
      defer.resolve(response.data.results);
    })
    return defer.promise;
  }
})
