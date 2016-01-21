angular.module('edx-app')
  .controller('navigation_controller', ['$scope', function($scope) {
    $scope.links = [
      {name: "Home", url:""},
      {name: "Blog", url:"blogs"},
      {name: "News", url:"news"}
    ];
  }])
