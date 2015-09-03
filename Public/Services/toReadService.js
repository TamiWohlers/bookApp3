var app = angular.module("bookApp2");
    
    // app.service('homeService', function(){

app.service('toReadService', function($http, $q) {
    this.buildCart = function(book) {
        // console.log('in addToCart', book)
        // var dfd = $q.defer()
        var cart = {};
        cart.Product = "Book";
        cart.Title = book.title;
        cart.Price = book.price;
        cart.image = book.image;
        console.log('cart', cart);
        // dfd.resolve(cart)
        // return dfd.promise;  
        return cart  
        }
	this.addToCart= function(cart){
        console.log('add to cart', cart)
        var deferred = $q.defer();      
        var url = '/api/carts/'
        $http({
            method: 'POST',
            url: url,
            data: cart 
        }).then(function(data){
            console.log(data);
            deferred.resolve(data); 
        }) 
        return deferred.promise;
    }

    this.getCartBooks = function() {
        var deferred = $q.defer();
        var url = '/api/carts/all';
        $http({
            method: 'GET',
            url:url
        }).then(function(data){
            deferred.resolve(data.data);
        })
        return deferred.promise;
    }




    
 });