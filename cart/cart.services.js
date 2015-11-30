(function() {
  'use strict';
  angular
    .module('products')
     .factory('CartService', function($http) {
         var url = 'https://tiny-tiny.herokuapp.com/collections/lindsayNgCart';

               var addToCart = function (item) {
                 // delete item._id;
                      $http.post(url, item).then(function (res) {
                        console.log(res);
                      });
                   };

               var getItem = function () {
                 return $http.get(url);
               };

               var removeItemfromCart= function(product){
                 var newUrl = url + "/" + product;
                 console.log(newUrl);
                 $http.delete(newUrl).then(
                   function(data) {
                     console.log("successfully removed from cart", data)
                   },
                   function(data) {
                   console.log("ERROR", data);
                 });
               };

               return {
                 addToCart: addToCart,
                 removeItemfromCart: removeItemfromCart,
                 getItem: getItem

               };


        });
}());
