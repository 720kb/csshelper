(function (angular) {
  'use strict';

  angular.module('css', [
    'ngRoute',
    'css.controllers',
    'hljs'
  ])
  .config(['$routeProvider', '$locationProvider', '$httpProvider', 'hljsServiceProvider', function ($routeProvider, $locationProvider, $httpProvider, hljsServiceProvider) {

    $routeProvider
      .when('/',{
        templateUrl:'views/home/index.html',
        controller:'Home'
      })
      .when('/layout',{
        templateUrl:'views/layout/index.html',
        controller:'Layout'
      })
       .when('/buttons',{
        templateUrl:'views/buttons/index.html',
        controller:'Buttons'
      })
       .when('/colors',{
        templateUrl:'views/colors/index.html',
        controller:'Colors'
      })
       .when('/backgrounds',{
        templateUrl:'views/backgrounds/index.html',
        controller:'Backgrounds'
      })
       .when('/utils',{
        templateUrl:'views/utils/index.html',
        controller:'Utils'
      })
       .when('/no',{
        templateUrl:'views/no/index.html',
        controller:'No'
      })
       .when('/animations',{
        templateUrl:'views/animations/index.html',
        controller:'Animations'
      })
       .when('/responsive',{
        templateUrl:'views/responsive/index.html',
        controller:'Responsive'
      })
      .otherwise({
        redirectTo:'/'
      });

    //$locationProvider.html5Mode(true); //github pages won't

    $httpProvider.defaults.withCredentials = true;//XHR Credentials
    hljsServiceProvider.setOptions({
      // replace tab with 4 spaces
      tabReplace: ' '
    });
  }])
  .run(['$location', '$rootScope', function ($location, $rootScope) {
    var rootScopit = function () {
    $rootScope.config = {};

    $rootScope.config.appName = 'Css helper';
    $rootScope.config.appUrl = $location.protocol()+'://'+$location.host();
    $rootScope.config.appPath = $location.path();
    $rootScope.config.appFullPath = $location.url();
    $rootScope.config.appCurrentUrl = $rootScope.config.appUrl+$rootScope.config.appFullPath;
    $rootScope.config.appGithubUrl = 'https://github.com/720kb/csshelper';
    $rootScope.config.appDownloadUrl = 'https://github.com/720kb/csshelper';
    $rootScope.layout = {
      responsiveMenu : {
        show: false
        }
      };
    };

    $rootScope.$on('$routeChangeStart', function () {
        rootScopit();
    });
  }]);

})(window.angular);
