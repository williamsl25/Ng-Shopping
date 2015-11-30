(function() {
  'use strict';
  angular
    .module('cart')
     .factory('CartService', function($http) {
         var url = 'https://tiny-tiny.herokuapp.com/collections/lindsayNgCart';

               var addToCart = function (item) {
                 delete item._id;
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
                 return $http.delete(newUrl);
               };

               return {
                 addToCart: addToCart,
                 removeItemfromCart: removeItemfromCart,
                 getItem: getItem

               };


        });
}());
