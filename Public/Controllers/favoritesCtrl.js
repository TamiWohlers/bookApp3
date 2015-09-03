var app = angular.module('bookApp2');

app.controller('favoritesCtrl', function($scope, userService, homeService){
	$scope.getAll = function() {
        homeService.getAll().then(function(data) {
            // console.log(data);
            $scope.getCurrent(data);
            // $scope.currentFaves = data;
            // console.log('in getAll on home.Ctrl', data);
            i = data.length;
        })
    }
    $scope.getAll();
    $scope.getCurrent = function(data) {
        var favoritesArray = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].readStatus === 'favorites') {
                favoritesArray.push(data[i]);
            }
        }
        console.log('in favorites, get current', favoritesArray)
        $scope.currentFavorites = favoritesArray;
    }
    $scope.bookObject = {};
    
    $scope.searchForBook = function(title, author) {

        // console.log('in controller', title, author);
        homeService.searchForBook(title, author).then(function(data) {
            $scope.title  = "";
            $scope.author = "";
            // console.log(data)

            homeService.buildObject($scope.bookObject, data);

            $scope.bookObject.readStatus = 'favorites';
            homeService.postBook($scope.bookObject);
            
            
            // console.log('in Search', $scope.currentFaves)
            // $scope.currentFaves.push(bookObject); 
            $scope.getAll();
        })
        
    }
    
    $scope.findAndDeleteBook = function(book) {
    		//console.log('in find and delete', book)
            homeService.findBook(book).then(function(data) {
            	console.log('in findBook', data)
                homeService.deleteBook(data);
                $scope.getAll();
            })
        }
    
});