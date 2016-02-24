'use strict';

describe('Controller: SignUpController', function () {
  var scope, $httpBackend, form_data, req_handler, rootScope;

  beforeEach(module('edx-app'));
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    req_handler = $httpBackend.when('POST', '/sing_up').respond({email: 'example@example.com'});
    form_data = {
      email: 'example@example.com',
      password: 'password',
      first_name: 'John',
      last_name: 'Dou'
    };
    $controller('sign_up_controller',{
      $scope: scope
    });
  }));

  describe('submit', function () {

    it('should change alert state to true', function() {
      expect(scope.show_alert).toBe(false);
      $httpBackend.expectPOST('/sign_up').respond();
      scope.submit();
      $httpBackend.flush();
      expect(scope.show_alert).toBe(true);
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
