angular.module('myApp')
.directive('myDirective', function() {
  return {
    scope: {
      image: '=imgSrc'
    },
    templateUrl: 'image.html'
  }
})
