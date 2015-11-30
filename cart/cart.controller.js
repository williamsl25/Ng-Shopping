(function() {
  'use strict';
  angular
    .module('cart')
    .controller('CartController', function ($scope, ProductsService, CartService) {
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

}());
