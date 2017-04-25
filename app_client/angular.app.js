var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {

  $routeProvider // inline template
    .when('/', {
    templateUrl: 'other/index.html'
  })

  .when('/userprofile/:id', {
    templateUrl: 'other/userProfile.html',
    controller: "UserProfileController",
    controllerAs: 'userProfCon'
  })

  .when('/register', {
    templateUrl: 'other/register.html',
    controller: 'RegisterController',
    controllerAs: 'regCon',
    access: {
      restricted: false
    }
  })

  .when('/login', {
    templateUrl: 'other/login.html',
    controller: 'LoginController',
    controllerAs: 'logCon'
  })

  .otherwise({
    redirectTo: '/'
  });
});