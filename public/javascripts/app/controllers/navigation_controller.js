angular.module('edx-app')
  .controller('navigation_controller', function($scope, $location) {
    $scope.links = [
      {name: "Home", url:"/"},
      {name: "Blog", url:"/blogs"},
      {name: "News", url:"/news"}
    ];
    $scope.is_active = function(path){
      return path === $location.path();
    }
  })
