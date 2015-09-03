var app = angular.module('bookApp2');

app.controller('cartCtrl', function($scope, cartService, toReadService, homeService) {
    $scope.getBooksInCart = function() {
        $scope.booksInCart = [];
        toReadService.getCartBooks().then(function(data) {
            $scope.booksInCart = data;
            $scope.total = 0;
            for (var i = 0; i < $scope.booksInCart.length; i++) {
                $scope.total = Math.round(($scope.total + $scope.booksInCart[i].Price) * 100) / 100;
            }

            console.log('in cartCtrl', data)
        })
    };
    $scope.getBooksInCart();

    $scope.deleteFromCart = function(book) {
        console.log("first line in deleteFromCart", book)
        cartService.deleteBook(book).then(function(result) {
                $scope.booksInCart = result;
                // console.log('$$$$$$', $scope.booksInCart)
                $scope.total = 0;
                for (var i = 0; i < $scope.booksInCart.length; i++) {
                    $scope.total = Math.round(($scope.total + $scope.booksInCart[i].Price) * 100) / 100;
                }
                $scope.getBooksInCart();
            })
            // $scope.currentFaves.splice(i - 1, 1);
            // i--;
            // console.log('current faves', $scope.currentFaves);


    }



});
