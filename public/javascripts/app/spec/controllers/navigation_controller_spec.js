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
      expect(scope.is_active('/test')).toBeTruthy();
    });

    it('should return true when path starts from same word', function() {
      location.path('/test/1/show');
      expect(scope.is_active('/test')).toBeTruthy();
    })

    it('should return false if pathes are different', function() {
      location.path('/test');
      expect(scope.is_active('/home')).toBeFalsy();
    })

    it('should return true if path contains params but start from the same word', function() {
      location.path('/test?condition=true');
      expect(scope.is_active('/test')).toBeTruthy();
    })

    it('should return false if path does not start from link path', function() {
      location.path('/home/test?news=last&condition=true');
      expect(scope.is_active('/test')).toBeFalsy();
    })

    it('should return true for only one link', function () {
      location.path('/test');
      expect(scope.is_active('/test')).toBeTruthy();
      expect(scope.is_active('/')).toBeFalsy();
      expect(scope.is_active('/home')).toBeFalsy();
    });

  });

});
