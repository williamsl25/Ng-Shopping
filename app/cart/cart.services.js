(function() {
  'use strict';
  angular
    .module('cart')
     .factory('CartService', function($http) {
         var url = 'https://tiny-tiny.herokuapp.com/collections/lindsayNgCart';
          var cart = [];
          var addToCart = function(product) {
            return $http.post(url, product)
          }
           var getItem = function () {
             return $http.get(url);
           };

           var removeItemfromCart= function(product){
             var newUrl = url + "/" + product;
             console.log(newUrl);
             return $http.delete(newUrl);
           };



          var plusQuantity = function (item) {

            item.quantity = item.quantity + 1;
          };

          var minusQuantity = function (item) {
            if(item.quantity > 1){
              item.quantity = item.quantity - 1;
            }

          };

           return {
             getItem: getItem,
             removeItemfromCart: removeItemfromCart,
             plusQuantity: plusQuantity,
             minusQuantity: minusQuantity,
             addToCart: addToCart,
           };


        });
}());
