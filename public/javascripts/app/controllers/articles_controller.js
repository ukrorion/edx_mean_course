angular.module('edx-app')
  .controller('articles_controller', ['$scope', function($scope) {
    $scope.articles = [
      {
        title: "Title",
        author: "First Last Name",
        created_at: "01/20/2016 - 10:30pm",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      }
    ]
  }])
