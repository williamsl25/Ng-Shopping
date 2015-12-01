(function () {
  "use strict";
  angular
    .module('products')
    .directive('myproduct', function () {
      return {
        restrict: 'E',
        templateUrl: 'products/views/myproduct.directive.html',
        scope: {
          prod: '=',
          editme: '&',
          deleteme: '&'
          },

        }
    });


})();
