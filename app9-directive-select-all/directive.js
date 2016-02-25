angular.module('myApp')
.directive('highlightThis', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.on('mousedown', function() {
        var text = element.val()
        this.select();

      })
      element.on('mouseup', function(e){
        e.preventDefault();
      })
    }
  }
})
