angular.module('mean').controller('ContactsController', function($scope){
	$scope.total = 0;
	$scope.add = function() {
      $scope.total++;
    };
});