angular.module('bookApp2').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {


  console.log("star rating", $scope.starRating)
  $scope.ok = function () {
    var bookReviewed = {};
    bookReviewed.rating = $scope.rating;
    bookReviewed.review = $scope.review;
    $modalInstance.close(bookReviewed);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});