angular.module('edx-app').
  factory('auth_service', ['$http', '$rootScope', '$localStorage', function($http, $rootScope, $localStorage){
    var sign_up = function(form_data, success_callback, error_callback){
      $http.post('/sign_up', form_data).then(
        function(data){
          $rootScope.$broadcast('user_created');
          success_callback();
        }, function(error){
          error_callback();
        });
    }
    return {
      sign_up: sign_up
    }
  }]);
