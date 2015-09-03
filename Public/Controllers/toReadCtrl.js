var app = angular.module('bookApp2');

app.controller('toReadCtrl', function($scope, toReadService, homeService) {
    $scope.toRead = [];

    $scope.searchForBook = function(title, author) {



        // console.log('in controller', title, author);
        homeService.searchForBook(title, author).then(function(data) {
            console.log(data);
            $scope.title  = "";
            $scope.author = "";
            $scope.bookObject = {};

            homeService.buildObject($scope.bookObject, data);
            console.log($scope.bookObject);
            $scope.bookObject.readStatus = 'want to read';
            homeService.postBook($scope.bookObject);

            $scope.getAll();
        })
    }

    $scope.getCurrent = function(data) {
        console.log('in getCurrent', data);
        var newReadArray = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].readStatus === 'want to read') {
                newReadArray.push(data[i]);
            }
            $scope.toRead = newReadArray;
        }
    }
    $scope.getAll = function() {
        homeService.getAll().then(function(data) {
            // console.log(data);
            $scope.getCurrent(data);
            
        })
    }

    $scope.getAll();



    // $scope.addToCart = function(cart) {  

    // }



    $scope.findAndDeleteBook = function(book) {
        homeService.findBook(book).then(function(data) {
            homeService.deleteBook(data);
            $scope.getAll();
        })
    }

    $scope.buildCart = function(book) {
        console.log(book)
        var cart = toReadService.buildCart(book);
        toReadService.addToCart(cart).then(function(data) {
            console.log('cart', data)
        })
    }
    $scope.booksInCart = [];
    $scope.getCartBooks = function() {
        toReadService.getCartBooks().then(function(data) {
                $scope.booksInCart = data;
                console.log('in getCartBooks', $scope.booksInCart)
                
                })
                $scope.getCartBooks();
                
        }
    });
        









// console.log('in Search', $scope.currentFaves)
// $scope.currentFaves.push(bookObject);
