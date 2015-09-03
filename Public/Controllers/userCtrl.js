var app = angular.module('bookApp2');

app.controller('userCtrl', function($scope, userService, homeService) {
    $scope.userObject = {};

    $scope.setUpUser = function(user, password) {
        $scope.userObject.user = user;
        $scope.userObject.password = password;
        console.log($scope.userObject);
        userService.setUpUser($scope.userObject);
    }
    $scope.logInUserObject = {};
    $scope.logInUser = function(user, password) {
    	$scope.logInUserObject.user = user;
    	$scope.logInUserObject.password = password;
    	userService.logInUser($scope.logInUserObject);

    }
   
})
