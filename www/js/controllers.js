angular.module('Fashionista.controllers', [])
	// Main Controller (main.html)
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.status = "It works!";
    }])
    // View 2 Controller (needs a better name)
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
    }])
    // main Controller
    .controller('mainController', ['$scope', function($scope) {
		$scope.templates = [
		{ name: 'Profile View', url: 'profile.html'},
		{ name: 'Discover View', url: 'discover.html'} ];
		$scope.template = $scope.templates[0];
	}]);