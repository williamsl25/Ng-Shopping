(function () {
  "use strict";
  angular
    .module('shopping')
    .factory('ProductsService', function ($http) {
      // var url = 'http://tiny-tiny.herokuapp.com/collections/lindsayNgProducts';


    var addProduct = function (newProduct) {
        console.log(newProduct);
        $http.post(url, newProduct);
      };
    var getProducts = function () {
        return $http.get(url);
      };

    var getSingleProduct = function (productId) {
        return $http.get(url + '/' + productId);
      };

    var updateProduct = function (updatedProduct) {
        return $http.put(url + '/' + updatedProduct._id, updatedProduct);
      };

    var removeProduct = function (productId) {
        return $http.delete(url + '/' + productId);
      };


    return {
        addProduct: addProduct,
        getSingleProduct: getSingleProduct,
        removeProduct: removeProduct,
        updateProduct: updateProduct,
        getProducts: getProducts
      };
    });
// left side refers to the controller action, right side refers to the addProduct named in the service above


})();
