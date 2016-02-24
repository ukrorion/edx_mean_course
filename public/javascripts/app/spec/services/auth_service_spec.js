'use strict';

describe('Controller: AuthService', function () {
  var $httpBackend, form_data, response, rootScope, auth, success_callback, error_callback, localStorage;

  beforeEach(module('edx-app'));
  beforeEach(inject(function (auth_service, $rootScope, $localStorage, _$httpBackend_) {
    success_callback = expect.createSpy();
    error_callback = expect.createSpy();
    localStorage =  $localStorage;
    rootScope = $rootScope;
    auth = auth_service;
    $httpBackend = _$httpBackend_;
    response = JSON.stringify({email: 'example@example.com'})
    form_data = {
      email: 'example@example.com',
      password: 'password',
      first_name: 'John',
      last_name: 'Dou'
    };
    expect.spyOn(rootScope, '$broadcast');
  }));

  describe('sing_up method', function () {
    it('should post data to server and get user data', function () {
      $httpBackend.expectPOST('/sign_up', form_data).respond(200, response);
      auth.sign_up(form_data, success_callback, error_callback);
      $httpBackend.flush();
      expect(success_callback).toHaveBeenCalled();
      expect(error_callback).toNotHaveBeenCalled();
    });

    it('should broadcast \'user_autorized\' event on success responce', function(){
      $httpBackend.expectPOST('/sign_up').respond(200, response);
      auth.sign_up(form_data, success_callback, error_callback);
      $httpBackend.flush();
      expect(rootScope.$broadcast).toHaveBeenCalledWith('user_autorized');
    });
  });

  describe('token', function () {
    it('should be set to storage on success', function () {
      $httpBackend.expectPOST('/sign_up').respond(200, response, {'A-Token' : 'fake token'});
      auth.sign_up(form_data, success_callback, error_callback);
      $httpBackend.flush();
      expect(localStorage.a_token).toExist();
      expect(localStorage.a_token).toEqual('fake token');
    });
  });
});
