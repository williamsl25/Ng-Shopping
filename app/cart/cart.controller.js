(function() {
  'use strict';
  angular
    .module('cart')
    .controller('CartController', function ($scope, ProductsService, CartService) {
          var allItems;
          $scope.total = 0;

          CartService.getItem().success(function (item) {
            console.log(item);
            $scope.CartItems = item;
            allItems = item;
          });

          $scope.removeItemfromCart = function(itemID){
            CartService.removeItemfromCart(itemID).success(function() {
                CartService.getItem().success(function(data) {
                  $scope.CartItems = data;
                  allItems = item;
                })
            });
          };
          $scope.addToCart =function (item) {
            ProductsService.addToCart(item);
            $location.path('/cart');
          };

          var getCartTotal = function () {
           var total = 0;
           _.map(allItems, function(product){
             if(product.quantity) {
               total = total + (product.quantity * product.price);
               console.log(total);
             }
             $scope.total = total;

           });
         };


          $scope.plusQuantity = function (passedItem) {
            if(passedItem.quantity) {
              passedItem.quantity += 1;
            } else {
              passedItem.quantity = 1;
            }
            getCartTotal();
          };

          $scope.minusQuantity = function (passedItem) {
            if(passedItem.quantity) {
              passedItem.quantity -= 1;
            }
            getCartTotal();
          };


      });


}());
