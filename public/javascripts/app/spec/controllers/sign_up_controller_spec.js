'use strict';

describe('Controller: SignUpController', function () {
  var scope, $httpBackend, form_data, req_handler, rootScope;

  beforeEach(module('edx-app'));
  beforeEach(inject(function ($controller, $rootScope, $localStorage, _$httpBackend_) {
    scope = $rootScope.$new();
    rootScope = $rootScope;
    expect.spyOn(rootScope, '$broadcast');
    $httpBackend = _$httpBackend_;
    req_handler = $httpBackend.when('POST', '/sing_up').respond({email: 'example@example.com'});
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
      $httpBackend.expectPOST('/sign_up').respond();
      scope.submit();
      $httpBackend.flush();
      expect(scope.show_alert).toBe(true);
    });

    it('should post data to server', function () {
      scope.email = 'example@example.com';
      scope.password = 'password';
      scope.first_name = 'John';
      scope.last_name = 'Dou';
      req_handler.respond(200, '');
      $httpBackend.expectPOST('/sign_up', form_data).respond(200, '');
      scope.submit();
      $httpBackend.flush();
    });

    it('should broadcast \'user_created\' event on success responce', function(){
      req_handler.respond(200, '');
      $httpBackend.expectPOST('/sign_up').respond(200, '');
      scope.submit();
      $httpBackend.flush();
      expect(rootScope.$broadcast).toHaveBeenCalledWith('user_created');
    })
  });

  describe('hide_alert', function(){
    it('should change state of show_alert to false', function() {
      scope.show_alert = true;
      scope.hide_alert();
      expect(scope.show_alert).toBe(false);
    })
  });

});
