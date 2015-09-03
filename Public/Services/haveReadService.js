var app = angular.module("bookApp2");
    
    // app.service('homeService', function(){

app.service('haveReadService', function($http, $q) {
	this.readBooks = [];

	this.changeReadStatus= function(book, bookReviewed){
		    book.readStatus =  "have read";
		    book.review = bookReviewed.review;
		    book.rating = bookReviewed.rating;
		    console.log('book rating', book.rating);
		    console.log('in change', book);
    		this.readBooks.push(book);
    		var deferred = $q.defer();
    		var url = '/api/books/' + book._id
	    	$http({
	    		method: 'PUT',
	    		url: url,
	    		data: book
	    	}).then(function(data){
	    		deferred.resolve(data.data)
	    	})
	    	return deferred.promise;

    	}

});

