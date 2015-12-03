(function() {
  'use strict';

  angular
    .module('products', [
      'ngRoute',
      'cart'
    ])
.config(function ($routeProvider) {
  $routeProvider
  .when('/products', {
    templateUrl: 'products/views/list.html',
    controller: 'ProductsController as ProductsCtrl'
  })
  //indiv product page
  .when('/products/:productId', {
    templateUrl: 'products/views/detail.html',
    controller: 'ProductsController as ProductsCtrl'
  })
  //edit race
  .when('/products/:productId/edit', {
    templateUrl: 'products/views/edit.html',
    controller: 'ProductsController as ProductsCtrl'
  })

  //addproduct
  .when('/addproduct', {
    templateUrl: 'products/views/create.html',
    controller: 'ProductsController as ProductsCtrl'
    })

  });
}());
