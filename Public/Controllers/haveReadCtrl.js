var app = angular.module('bookApp2');

app.controller('haveReadCtrl', function($scope, haveReadService, homeService) {
    var haveReadArray = [];
    $scope.getAll = function() {
        homeService.getAll().then(function(data) {
            console.log('in haveReadService data', data);
            $scope.getCurrent(data);
            // $scope.currentFaves = data;
            // console.log('in getAll on home.Ctrl', data);
            // i = data.length;
        })
       }
       $scope.getCurrent = function(data) {
        console.log('in getCurrent', data);
        var haveReadArray = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].readStatus === 'have read') {
                haveReadArray.push(data[i]);
            }
            $scope.haveRead = haveReadArray;
        }
    }

    $scope.searchForBook = function(title, author) {

        // console.log('in controller', title, author);
        homeService.searchForBook(title, author).then(function(data) {
            // console.log(data)
            $scope.title  = "";
            $scope.author = "";

            homeService.buildObject($scope.bookObject, data);

            $scope.bookObject.readStatus = 'have read';
            homeService.postBook($scope.bookObject);
            
            
            // console.log('in Search', $scope.currentFaves)
            $scope.haveReadArray.push(bookObject); 
            $scope.getAll();
        })
    }
    

    $scope.getAll();
    $scope.getRead = function(data) {
        var haveReadArray = [];
        console.log('in getRead ', data)
        for (var i = 0; i < data.length; i++) {
            if (data[i].readStatus === 'have read') {
                haveReadArray.push(data[i]);
            }
        }
        $scope.readBooks = haveReadArray;
    }

    $scope.findAndDeleteBook = function(book) {
            homeService.findBook(book).then(function(data) {
                homeService.deleteBook(data);
                $scope.getAll();
            })
        }

    $scope.bookObject = {};
    
    // rateFunction = function(rating) {
    //         $scope.bookObject._v = rating;
    //         rateFunction(rating);
    //         console.log(rating);
    //     }

        // $scope.findAndDeleteBook = function(book) {
        //     homeService.findBook(book).then(function(data) {
        //         homeService.deleteBook(data);
        //         $scope.getAll();

        //     })
        // }

    });


    // $scope.searchForBook = function(title, author) {
    //     console.log('in controller', title, author);
    //     homeService.searchForBook(title, author).then(function(data) {
    //         // console.log(data);
    //         bookObject = {};
    //         // $scope.books = data;
    //         bookObject.author = data.items[0].volumeInfo.authors[0];
    //         // console.log(bookObject.author);
    //         bookObject.title = data.items[0].volumeInfo.title;
    //         bookObject.image = data.items[0].volumeInfo.imageLinks.smallThumbnail;
    //         bookObject.review = data.items[0].searchInfo.textSnippet;
    //         bookObject.rating= data.items[0].averageRatings;
    //         // console.log($scope.bookObject.review);
    //         bookObject.id = data.items[0].id;
    //         bookObject.readStatus = 'currently reading';

    //         $scope.readBoooks.splice(0, 0, bookObject);
    //         $scope.postBook(bookObject);
    //         // console.log('in Search', $scope.currentFaves)
    //         // $scope.currentFaves.push(bookObject);
    //  }) 

