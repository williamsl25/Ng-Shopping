(function (){
  "use strict";

  angular
    .module('products', [
    'ngRoute',
    'underscore'
  ])
  .config(function ($routeProvider){
    $routeProvider
    //root route
      .when('/', {
        template: '<h1>Home Page</h1>',
        controller: 'MainController'
      })
      //all products list
      .when('/products', {
        templateUrl: 'views/products/list.html',
        controller: 'ProductsController'
      })
      //indiv product page
      .when('/products/:productId', {
        templateUrl: 'views/products/detail.html',
        controller: 'ProductsController'
      })
      //edit race
      .when('/products/:productId/edit', {
        templateUrl: 'views/products/edit.html',
        controller: 'ProductsController'
      })

      //addproduct
      .when('/addproduct', {
        templateUrl: 'views/products/create.html',
        controller: 'ProductsController'
      })

      //ADMIN
          .when('/admin', {
            templateUrl: 'views/adminProducts/adminList.html',
            controller: 'AdminController'

          })

          .when('/admin/addProduct', {
            templateUrl: 'views/adminProducts/create.html',
            controller: 'AdminController'
          })

          .when('/404', {
            templateUrl: 'views/404.html'
          })
          .otherwise({ redirectTo: '/404'});

      });

  angular
    .module('underscore', [])
    .factory('_', function ($window) {
      return $window._;
    });

})();
