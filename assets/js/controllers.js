(function (angular) {
  'use strict';

  angular.module('css.controllers', [])
    .controller('Home', ['$scope', function ($scope) {
      return $scope;
    }])
    .controller('Layout', ['$scope', function ($scope) {
      return $scope;
    }])
    .controller('Buttons', ['$scope', function ($scope) {
      return $scope;
    }])
    .controller('Colors', ['$scope', function ($scope) {
      return $scope;
    }])
    .controller('Backgrounds', ['$scope', function ($scope) {
      return $scope;
    }])
    .controller('Utils', ['$scope', function ($scope) {
      return $scope;
    }])
    .controller('No', ['$scope', function ($scope) {
      return $scope;
    }])
    .controller('Components', ['$scope', function ($scope) {
      return $scope;
    }])
    .controller('Animations', ['$scope', function ($scope) {
      $scope.animationClasses = {
        'fade-out-slow':false,
        'fade-out-medium':false,
        'fade-out-fast':false,
        'fade-in-slow':false,
        'fade-in-medium':false,
        'fade-in-fast':false
      };
      $scope.setClass = function (theClass) {
        $scope.animationClasses[theClass] = true;
      };
    }])
    .controller('Responsive', ['$scope', '$window', function ($scope, $window) {
      $scope.windowWidth = $window.innerWidth;
      $scope.tabletWidth = 800;
      $scope.desktopWidth = 801;
      $scope.mobileWidth = 400;

      angular.element($window).bind('resize', function () {
            $scope.$apply(function () {
              $scope.windowWidth = $window.innerWidth;
            });
      });
    }]);

})(window.angular);
