(function () {
  "use strict";

  angular
    .module('cart', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/cart', {
          templateUrl: 'cart/cartViews/cartList.html',
          controller: 'CartController'
        })

    });


})();
