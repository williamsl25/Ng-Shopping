(function() {
  'use strict';
  angular
    .module('cart')
     .factory('CartService', function($http) {
         var url = 'https://tiny-tiny.herokuapp.com/collections/lindsayNgCart';
          var cart = [];

           var getItem = function () {
             return $http.get(url);
           };

           var removeItemfromCart= function(product){
             var newUrl = url + "/" + product;
             console.log(newUrl);
             return $http.delete(newUrl);
           };

           var getCartTotal = function () {
            var total = 0;
            _.map(cart, function(product){
              total = total + (product.quantity * product.price);
            });
            return total;
          };

          var plusQuantity = function (passedItem) {
            passedItem.quantity = passedItem.quantity + 1;
          };

          var minusQuantity = function (passedItem) {
            if(passedItem.quantity > 1){
              passedItem.quantity = passedItem.quantity - 1;
            }

          };

           return {
             getItem: getItem,
             getCartTotal: getCartTotal,
             removeItemfromCart: removeItemfromCart,
             plusQuantity: plusQuantity,
             minusQuantity: minusQuantity,

           };


        });
}());
