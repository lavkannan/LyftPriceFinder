// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('lyftpricefinder', ['ionic','lyftpricefinder.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'TabsCtrl'
  })

  .state('tab.map', {
    url: '/map',
    views: {
      'tab-map': {
        templateUrl: 'templates/map.html',
        controller: 'MapCtrl'
      }
    }
  })

    .state('tab.heatmap', {
    url: '/heatmap',
    views: {
      'tab-heatmap': {
        templateUrl: 'templates/heatmap.html',
        controller: 'HeatMapCtrl'
      }
    }
  })

    .state('tab.directions', {
    url: '/directions',
    views: {
      'tab-directions': {
        templateUrl: 'templates/directions.html',
        controller: 'DirectionsCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/tab/directions');

})

.constant('SERVER', {
  // Local server
  //url: 'http://localhost:3000'
  url: 'http://localhost:3000'
});