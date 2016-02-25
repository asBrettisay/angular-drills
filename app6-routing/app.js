angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/home.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '/views/signup.html'
    })
    .state('details', {
      url: '/details',
      templateUrl: '/views/details.html',
      controller: 'mainCtrl',
      resolve: {
        starshipPromise: function(starshipService) {
          return starshipService.getStarships();
        }
      }
    })
})
