angular.module('Fashionista.controllers', [])
	// Main Controller (main.html)
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.user = {
			firstname: "Kraig",
			lastname: "Walker",
			id: "kraigwalker"
		};
    }])

    // View 2 Controller (needs a better name)
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
    }]);