(function() {
  'use strict';

  angular
    .module('products')
    .controller('ProductsController', function ($scope, $routeParams, ProductsService, CartService, $location){

      ProductsService.getProducts().success(function (products) {
        $scope.products = products;
      });

      if($routeParams.productId) {
        ProductsService.getSingleProduct($routeParams.productId).success(function (singleProduct) {
          console.log(singleProduct);
          $scope.singleProduct = singleProduct;
        });
      }

      $scope.addProduct =function (product) {
        ProductsService.addProduct(product);
      };
      $scope.addToCart =function (item) {
        CartService.addToCart(item);
        $location.path('/cart');
      };

      $scope.editProduct = function (editedProduct) {
        console.log(editedProduct);
        ProductsService.updateProduct(editedProduct);
      };
      $scope.deleteProduct = function (productId) {
        ProductsService.removeProduct(productId);
      };

    })
}());
