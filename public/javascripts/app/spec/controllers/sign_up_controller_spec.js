'use strict';

describe('Controller: NavigationController', function () {
  var scope;

  beforeEach(module('edx-app'));
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('sign_up_controller',{
      $scope: scope
    });
  }));

  describe('submit', function () {
    it('should change alert state to true', function() {
      expect(scope.show_alert).toBe(false);
      scope.submit();
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
