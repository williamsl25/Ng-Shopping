(function () {
  "use strict";
  angular
    .module('products')
    .factory('ProductsService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/lindsayNgProducts';

  //     var products = [
  //   {
  //     name: "Isle 10'8 Soft Top Stand Up Paddle Board - Blue Stripe Classic ST Foam SUP",
  //     image: "http://ecx.images-amazon.com/images/I/41jngg3IHZL._SL160_SL150_.jpg",
  //     price: 503.57,
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   },
  //   {
  //     name: "Inflatable Stand Up Paddle Board w/3PC Paddle",
  //     image: "http://ecx.images-amazon.com/images/I/514NSuLV7JL._SX450_.jpg",
  //     price: 365.00,
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   },
  //   {
  //     name: "FCS Ratchet Tool",
  //     image: "http://ecx.images-amazon.com/images/I/41OFilYAwEL._SY355_.jpg",
  //     price: 16.98,
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  //   },
  //   {
  //     name: "COR Board Racks SUP / Paddle Board / Surfboard / Longboard Wall Storage Rack - Super Strong and Easy to Install Mount",
  //     image: "http://ecx.images-amazon.com/images/I/71MEyv5%2BETL._SY355AA355_PIcountsize-2,TopRight,0,0_AA355_SH20_.jpg",
  //     price: 44.99,
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  //   },
  //   {
  //     name: "Challenge 1-Piece Carbon Stand-Up Paddle",
  //     image: "http://ecx.images-amazon.com/images/I/21dLNzDKUkL._AA160_.jpg",
  //     price: 168.90,
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  //   },
  //   {
  //     name: "BULLET PROOF SURFs US Box center fin - 8 inch GLASS FLEX SUP and Longboard fin with FREE screw hardware and free Bullet Proof Surf mini sticker",
  //     image: "http://ecx.images-amazon.com/images/I/41Hu7qHkAAL._AA160_.jpg",
  //     price: 7.95,
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  //   },
  // ];

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

    });

    return {
        addProduct: addProduct,
        getSingleProduct: getSingleProduct,
        removeProduct: removeProduct,
        updateProduct: updateProduct,
        getProducts: getProducts
      };
// left side refers to the controller action, right side refers to the addProduct named in the service above

angular.
   module('products')
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
               getItem: getItem,

             };


           });


})();
