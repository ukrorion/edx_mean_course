angular.module('edx-app')
  .controller('sign_up_controller', function($scope) {
    $scope.email = '';
    $scope.password = '';
    $scope.first_name = '';
    $scope.last_name = '';
    $scope.show_alert = false;

    $scope.submit = function(){
      $scope.info = 'Form was submited!'
      $scope.show_alert = true;
    }
    $scope.hide_alert = function(){
      $scope.show_alert = false;
    }
  })
