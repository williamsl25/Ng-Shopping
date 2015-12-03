(function () {
  "use strict";
  angular
    .module('products')
    .factory('ProductsService', function ($http, $rootScope) {
      
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
        $http.delete(url + '/' + productId).success(function (res) {
          $rootScope.$broadcast('product:deleted');
        })
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
