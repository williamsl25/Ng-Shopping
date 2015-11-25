(function (){
"use strict"
  angular
  .module('products')
  .controller('MainController', function($scope){

  })
  .controller('ProductsController', function($scope, ProductsService, AdminService, $routeParams){

    AdminService.getProducts().success(function (products){
      console.log(products);
      $scope.buyProducts = products;
    });

    if($routeParams.productId) {
        AdminService.getOneProduct($routeParams.productsId).success(function (singleproduct) {
          console.log(singleProduct);
          $scope.singleProduct = singleProduct;
        });
      }

    $scope.newProduct = function (newProduct) {
        AdminService.createProduct(newadminProduct);
      };

    $scope.editadminProduct = function (editedProduct) {
        AdminService.updateProduct(editedProduct);
      };

    $scope.deleteProduct = function (productId) {
        AdminService.deleteProduct(productId);
      };

// ProductsController-----------------------

  ProductsService.getProducts().success(function (products){
    console.log(products);
    $scope.buyProducts = products;
  });


  if($routeParams.productId) {
      ProductsService.getOneProduct($routeParams.productsId).success(function (singleProduct) {
        console.log(singleProduct);
        $scope.singleProduct = singleProduct;
      });
    }


  $scope.editProduct = function (editedProduct) {
      ProductsService.updateProduct(editedProduct);
    };


  });

})();
