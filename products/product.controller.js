(function() {
  'use strict';

  angular
    .module('products')
    .controller('ProductsController', function ($scope, $routeParams, ProductsService, CartService, $location){

      ProductsService.getProducts().success(function (product) {
        $scope.products = product;
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
        ProductsService.updateProduct(editedProduct).then(function() {
            $location.path('/products');
        });
      };
      $scope.deleteProduct = function (productId) {
        ProductsService.removeProduct(productId).then(function() {
            $location.path('/products');
        });
      };


    })
}());
