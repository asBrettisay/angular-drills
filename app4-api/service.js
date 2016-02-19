angular.module('apiApp')
.service('swSvc', function($q, $http) {
  var baseUrl = "http://swapi.co/api";

  this.getStarships = function() {
    var later = $q.defer();

    $http({
      method: "GET",
      url: baseUrl + "/starships/"
    }).then(function(response) {
      var starships = response.data.results;

      starships.forEach(function(ship) {
        getPilots(ship.pilots)
      })

      later.resolve(starships);
    })

    return later.promise;
  }

  var getPilots = function(pArr) {
    var index = 0;
    var ans = $q.defer();
    function pilotRetriever() {
      if (pArr[index]) {
        $http({
          method: "GET",
          url: pArr[index]
        }).then(function(response) {
          pArr[index] = response.data;
          index++
          pilotRetriever();
        })
      } else {
        ans.resolve(pArr);
        return ans.promise;
      }
    }
    pilotRetriever();
  }

})
