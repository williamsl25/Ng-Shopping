(function () {
  "use strict";
  angular
    .module('products', [
      'ngRoute',
      'underscore'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            template: '<h1>Welcome to Paddleboard Products</h1><a href="#/products">go to products</a>',
            controller: 'MainController'
          })
        .when('/products', {
            templateUrl: 'views/products/list.html',
            controller: 'ProductsController'
          })
        .when('/products/:productId', {
            templateUrl: 'views/products/detail.html',
            controller: 'ProductsController'
          })
        .when('/products/:productId/edit', {
            templateUrl: 'views/products/edit.html',
            controller: 'ProductsController'
        })
        .when('/adminProducts', {
            templateUrl: 'views/adminProducts/adminList.html',
            controller: 'ProductsController'
          })
        .when('/adminProducts/:adminProductId', {
            templateUrl: 'views/adminProducts/adminDetail.html',
            controller: 'ProductsController'
          })
        .when('/addProduct', {
            templateUrl: 'views/adminProducts/create.html',
            controller: 'ProductsController'
        })
      });

  angular
    .module('underscore', [])
    .factory('_', function ($window) {
      return $window._;
    });

})();
