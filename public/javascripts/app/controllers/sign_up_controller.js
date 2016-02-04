angular.module('edx-app')
  .controller('sign_up_controller', function(auth_service, $scope) {
    $scope.show_alert = false;

    var success_alert = function(){
      $scope.info = 'Form was submited!'
      $scope.show_alert = true;
    }

    var error_alert = function(){
      $scope.info = 'Error request'
      $scope.show_alert = true;
    }

    $scope.submit = function(){
      var form_data = {
        email: $scope.email,
        password: $scope.password,
        first_name: $scope.first_name,
        last_name: $scope.last_name
      }
      auth_service.sign_up(form_data, success_alert, error_alert);
    }
    $scope.hide_alert = function(){
      $scope.show_alert = false;
    }
  })
