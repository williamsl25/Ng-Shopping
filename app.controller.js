(function () {
  "use strict";

  angular
    .module('products')
    .controller('MainController', function($scope){

  })
    .controller('ProductsController', function ($scope, $routeParams, ProductService)
    {
      ProductService.getProducts().success(function (products) {
        $scope.products = products;
      });

      if($routeParams.productId) {
        ProductService.getSingleProduct($routeParams.productId).success(function (singleProduct) {
          console.log(singleProduct);
          $scope.singleProduct = singleProduct;
        });
      }

      $scope.addProduct = function (product) {
        ProductService.addProduct(product);
      };

      $scope.editProduct = function (editedProduct) {
        ProductService.updateProduct(editedProduct);
      };
      $scope.deleteProduct = function (productId) {
        ProductService.removeProduct(productId);
      };

    })

    .controller('CartController', function ($scope, CartService) {
      $scope.testmessage = "this is a string";

        CartService.getItem().success(function (item) {
          console.log(item);
          $scope.CartItems = item;
        });

        $scope.removeItemfromCart = function(itemID){
          console.log("removed from cart", itemID);
          CartService.removeItemfromCart(itemID);
        };

  });

})();
