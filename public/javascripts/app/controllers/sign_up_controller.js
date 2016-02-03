angular.module('edx-app')
  .controller('sign_up_controller', function($scope, $http) {
    $scope.show_alert = false;

    $scope.submit = function(){
      var form_data = {
        email: $scope.email,
        password: $scope.password,
        first_name: $scope.first_name,
        last_name: $scope.last_name
      }
      $http.post('/sign_up', form_data).then(
        function(data){
          $scope.info = 'Form was submited!'
          $scope.show_alert = true;
        }, function(error){
          $scope.info = 'Something wrong'
        });
    }
    $scope.hide_alert = function(){
      $scope.show_alert = false;
    }
  })
