/*(function() {
  var app = angular.module('ionicApp', ['ui.router']);
    app.run(function($rootScope, $location, $state, LoginService) {
    console.clear();
    console.log('running');
    if(!LoginService.isAuthenticated()) {
      $state.transitionTo('login');
    }
  });
  app.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('login', {
        url : '/login',
        templateUrl : 'templates/login.html',
        controller : 'LoginController'
      })

      .state('home', {
        url : '/home',
        templateUrl : 'templates/home.html',
        controller : 'HomeController'
      });
      $urlRouterProvider.otherwise('/login');
    }]);
})();*/
angular.module('ionicApp', ['ionic', 'controllers', 'LoginService'])

.run(function($ionicPlatform,$rootScope, $location, $state, LoginService) { 
  $ionicPlatform.ready(function() {
    console.clear();
    console.log('running');
    if(!LoginService.isAuthenticated()) {
      $state.transitionTo('login');
    }
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
      .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginController'
    })

  // Each tab has its own nav history stack:

   .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});