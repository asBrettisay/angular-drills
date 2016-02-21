angular.module('apiApp')
.service('swSvc', function($q, $http, $timeout) {
  var baseUrl = "http://swapi.co/api";


  this.getStarships = function() {
    var starships;
    return $q(function(resolveShips, rejectShips) {

      $http({
        method: 'GET',
        url: baseUrl + '/starships/'
      }).then(function(response) {
        starships = response.data.results;

        starships.forEach(function(ship) {
          $q(function(resolvePilots, rejectPilots) {
            getPilots(ship.pilots).then(function(pArr) {
              resolvePilots(pArr)
            })

          }).then(function(pArr) {
            ship.pilots = pArr;
          })
        })
        resolveShips(starships)
      })
    })
  }




  var getPilots = function(pArr) {
    var index = 0, ansArr = [], ans = $q.defer();



    function pilotRetriever() {

      if (pArr[index]) {

        var pilot;
        var pilotDefer = $q.defer();
        var speciesDefer = $q.defer();
        var pilotPromise = pilotDefer.promise;
        var speciesPromise = speciesDefer.promise;


        $http({
          method: "GET",
          url: pArr[index]
        }).then(function(response) {
          pilotDefer.resolve(response.data);

          // Species API is available in the pilot data.
          $http({
            method: "GET",
            url: response.data.species
          }).then(function(response) {
            speciesDefer.resolve(response.data);
          })

          // Resolve both get messages together.
          $q.all([
            pilotPromise.then(function(data) {
              pilot = data;
            }),
            speciesPromise.then(function(data) {
              pilot.species = data;
            })
          ]).then(function(data) {
            ansArr.push(pilot);
          })

          index++;
          pilotRetriever();
        })
      } else {
        ans.resolve(ansArr);
      }
    }

    pilotRetriever();
    return ans.promise
  }

})
