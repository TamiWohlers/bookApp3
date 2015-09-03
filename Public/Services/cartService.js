app.service('cartService', function($http, $q) {

 //    }

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
    this.findBook= function(book) {
        console.log('infindBook delete', book);
        //console.log("first line of findBook", book);
       
        console.log(book.Title);
        book.Title = book.Title.toLowerCase();
         var deferred = $q.defer();   
        var url = '/api/carts/book/' + book.Title;
        $http({
            method: 'GET',
            url: url
        }).then(function(data) {
            console.log('back from GET in findBook', data)
            deferred.resolve(data.data)
        })
        return deferred.promise;
    }

    this.deleteBook = function(book){
        console.log('in delete book', book)
        var deferred = $q.defer();
        var url = '/api/carts/' + book._id;
        // return 
        $http({
            method: 'DELETE',
            url: url,
        }).then(function(data){
            console.log(data);
            deferred.resolve(data);
        })
        return deferred.promise;
}



 });