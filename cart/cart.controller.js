(function() {
  'use strict';
  angular
    .module('cart')
    .controller('CartController', function ($scope, ProductsService, CartService) {

          CartService.getItem().success(function (item) {
            console.log(item);
            $scope.CartItems = item;
          });

          $scope.removeItemfromCart = function(itemID){
            console.log("removed from cart", itemID);
            CartService.removeItemfromCart(itemID).success(function() {
                CartService.getItem().success(function(data) {
                  $scope.CartItems = data;
                })
            });
          };

      });

}());
