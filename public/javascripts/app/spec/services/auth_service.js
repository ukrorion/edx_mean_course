'use strict';

describe('Controller: SignUpController', function () {
  var $httpBackend, form_data, req_handler, rootScope, auth, success_callback, error_callback;

  beforeEach(module('edx-app'));
  beforeEach(inject(function (auth_service, $rootScope, $localStorage, _$httpBackend_) {
    success_callback = expect.createSpy();
    error_callback = expect.createSpy();
    rootScope = $rootScope;
    auth = auth_service;
    expect.spyOn(rootScope, '$broadcast');
    $httpBackend = _$httpBackend_;
    req_handler = $httpBackend.when('POST', '/sing_up').respond({email: 'example@example.com'});
    form_data = {
      email: 'example@example.com',
      password: 'password',
      first_name: 'John',
      last_name: 'Dou'
    };
  }));

  describe('sing_up', function () {
    it('should post data to server and get user data', function () {
      req_handler.respond(200, '');
      $httpBackend.expectPOST('/sign_up', form_data).respond(200, '');
      auth.sign_up(form_data, success_callback, error_callback);
      $httpBackend.flush();
      expect(success_callback).toHaveBeenCalled();
      expect(error_callback).toNotHaveBeenCalled();
    });

    it('should broadcast \'user_created\' event on success responce', function(){
      req_handler.respond(200, '');
      $httpBackend.expectPOST('/sign_up').respond(200, '');
      auth.sign_up(form_data, success_callback, error_callback);
      $httpBackend.flush();
      expect(rootScope.$broadcast).toHaveBeenCalledWith('user_created');
    })
  });
});
