(function (){
  "use strict";

  angular
    .module('shopping', [
    'ngRoute',
    'underscore',
    'products',
    'cart'
  ])
  .config(function ($routeProvider){
    $routeProvider
    //root route
      .when('/', {
        template: '<h1>Home Page</h1>',
        controller: 'MainController'
      })

    });

  angular
    .module('underscore', [])
    .factory('_', function ($window) {
      return $window._;
    });

})();
