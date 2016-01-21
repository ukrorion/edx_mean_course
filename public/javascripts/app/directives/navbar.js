angular.module('edx-app')
  .directive('navbar',function() {
    return {
      restrict: 'E',
      controller: 'navigation_controller',
      templateUrl: '/javascripts/app/views/navbar.html'
    };
  });
