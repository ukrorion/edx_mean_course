angular.module('edx-app')
  .controller('navigation_controller', function($scope, $location) {
    $scope.links = [
      {name: "Home", url:"/"},
      {name: "Blog", url:"/blogs"},
      {name: "News", url:"/news"},
      {name: "Sing Up", url:"/sing_up"}
    ];
    $scope.is_active = function(path){
      var matcher = new RegExp('^'+path,"i");
      return $location.path().match(matcher) != null;
    }
  })
