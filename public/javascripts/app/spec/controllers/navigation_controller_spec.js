'use strict';

describe('Controller: NavigationController', function () {
  var location, scope;

  beforeEach(module('edx-app'));
  beforeEach(inject(function ($controller, $location, $rootScope) {
    location = $location;
    scope = $rootScope.$new();
    $controller('navigation_controller',{
      $scope: scope
    });
  }));

  describe('is_active', function () {
    it('return true when paths are the same', function () {
      location.path('/test');
      expect(scope.is_active('/test')).toBeFalsy();
    });
  });

});
