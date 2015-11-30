(function() {
  'use strict';

  angular
    .module('products', [
      'ngRoute'
    ])
.config(function ($routeProvider) {
  $routeProvider
  .when('/products', {
    templateUrl: 'products/views/list.html',
    controller: 'ProductsController'
  })
  //indiv product page
  .when('/products/:productId', {
    templateUrl: 'products/views/detail.html',
    controller: 'ProductsController'
  })
  //edit race
  .when('/products/:productId/edit', {
    templateUrl: 'products/views/edit.html',
    controller: 'ProductsController'
  })

  //addproduct
  .when('/addproduct', {
    templateUrl: 'products/views/create.html',
    controller: 'ProductsController'
    })

  });
}());
