angular.module('Fashionista.controllers', [])
	// Main Controller (main.html)
    .controller('MainCtrl', ['$scope', function ($scope) {
		$scope.pageTitle = "Profile";
        $scope.user = {
			firstname: "Kraig",
			lastname: "Walker",
			id: "kraigwalker"
		};
    }])

    // View 2 Controller (needs a better name)
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
    }])
    // Control the divs on the tab bar
    .controller('TabCtrl', ['$scope', function ($scope) {
		var scope = $scope;
		scope.tabDivs = [
			{ 'class' : '', name : 'Profile', url : '#' },
			{ 'class' : '', name : 'The Walk', url : '#' },
			{ 'class' : '', name : 'Discover', url : '#' }
		];
		scope.lastSelectedDiv = -1;
		scope.setSelected = function(idx) {
			if(scope.lastSelectedDiv != -1) {
				scope.tabDivs[scope.lastSelectedDiv].class = '';
			}
			scope.lastSelectedDiv = idx;
			scope.stackedDivs[idx].class = 'classA';
		};
    }]);