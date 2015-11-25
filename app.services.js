(function () {
  "use strict";
  angular
    .module('products')
    .factory('ProductsService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/lindsayWilliams_ngProducts';

      var products = [
    {
      name: "Isle 10'8 Soft Top Stand Up Paddle Board - Blue Stripe Classic ST Foam SUP",
      image: "http://ecx.images-amazon.com/images/I/41jngg3IHZL._SL160_SL150_.jpg",
      price: 503.57,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Inflatable Stand Up Paddle Board w/3PC Paddle",
      image: "http://ecx.images-amazon.com/images/I/514NSuLV7JL._SX450_.jpg",
      price: 365.00,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "FCS Ratchet Tool",
      image: "http://ecx.images-amazon.com/images/I/41OFilYAwEL._SY355_.jpg",
      price: 16.98,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "COR Board Racks SUP / Paddle Board / Surfboard / Longboard Wall Storage Rack - Super Strong and Easy to Install Mount",
      image: "http://ecx.images-amazon.com/images/I/71MEyv5%2BETL._SY355AA355_PIcountsize-2,TopRight,0,0_AA355_SH20_.jpg",
      price: 44.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Challenge 1-Piece Carbon Stand-Up Paddle",
      image: "http://ecx.images-amazon.com/images/I/21dLNzDKUkL._AA160_.jpg",
      price: 168.90,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "BULLET PROOF SURFs US Box center fin - 8 inch GLASS FLEX SUP and Longboard fin with FREE screw hardware and free Bullet Proof Surf mini sticker",
      image: "http://ecx.images-amazon.com/images/I/41Hu7qHkAAL._AA160_.jpg",
      price: 7.95,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ];

    var getProducts = function () {
        return $http.get(url);
      };


    var updateOneProduct = function (product) {
      $http.put(url + '/' + product._id, product).then(function (res) {
        console.log(res);
      });
    };


    var getSingleProduct = function (productId) {
        return $http.get(url + '/' + productId);
      };

    var removeProduct = function (productId) {
      $http.delete(url + '/' + productId).then(function (res) {
        console.log(res);
      });

    };


    return {
        getProducts: getProducts,
        updateProduct: updateOneProduct,
        getOneProduct: getSingleProduct,
        deleteProduct: removeProduct,
      };
// left side refers to the controller action, right side refers to the addProduct named in the service above


    });

})();
