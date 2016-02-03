'use strict';

describe('Controller: SignUpController', function () {
  var scope, $httpBackend, form_data;

  beforeEach(module('edx-app'));
  beforeEach(inject(function ($controller, $rootScope, $localStorage, _$httpBackend_) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    form_data = {
      email: 'example@example.com',
      password: 'password',
      first_name: 'John',
      last_name: 'Dou'
    };
    $controller('sign_up_controller',{
      $scope: scope,
      $localStorage: $localStorage,
    });
  }));

  describe('submit', function () {
    it('should change alert state to true', function() {
      expect(scope.show_alert).toBe(false);
      scope.submit();
      expect(scope.show_alert).toBe(true);
    });

    it('should send data to server and get user token to auth user', function () {
      scope.submit();
      $httpBackend.expectPOST('/sign_up', form_data, function(header){
        return headers.Authorization === 'Bearssfsdffsdfaff';
      }).respond({'user':'example@example.com'});
    });
  });

  describe('hide_alert', function(){
    it('should change state of show_alert to false', function() {
      scope.show_alert = true;
      scope.hide_alert();
      expect(scope.show_alert).toBe(false);
    })
  });

});
