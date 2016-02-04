angular.module('edx-app').
  factory('auth_service', ['$http', '$rootScope', function($http, $rootScope){
    var sign_up = function(form_data, success_callback, error_callback){
      $http.post('/sign_up', form_data).then(
        function(data){
          $rootScope.$broadcast('user_created');
          success_callback.call();
        }, function(error){
          error_callback.call();
        });
    }
    return {
      sign_up: sign_up
    }
  }]);
