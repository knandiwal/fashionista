angular.module('Fashionista.controllers', [])

	// Profile Controller (profile.html)
    .controller('ProfileCtrl', ['$scope', function ($scope) {
		$scope.pageTitle = "Profile";
        $scope.user = {
			firstname: "Kraig",
			lastname: "Walker",
			id: "kraig_walker",
			pic: "http://images.ak.instagram.com/profiles/profile_4454353_75sq_1365259612.jpg"
		};
    }])

    // View 2 Controller (needs a better name)
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
    }])
    // Control the divs on the tab bar
    .controller('TabCtrl', ['$scope', '$location', function ($scope, $location) {
		$scope.tabDivs = [
			{ 'class' : '', name : 'Profile', url : '/profile' },
			{ 'class' : '', name : 'The Walk', url : '/main' },
			{ 'class' : '', name : 'Discover', url : '/discover' }
		];
		$scope.lastSelectedDiv = -1;

		$scope.changeView = function(view){
			$location.path(view);	// use a path, not hash
		}

		$scope.setSelected = function(index) {
			if($scope.lastSelectedDiv != -1) {
				$scope.tabDivs[$scope.lastSelectedDiv].class = '';
			}
			$scope.lastSelectedDiv = index;
			$scope.tabDivs[index].class = 'active';
			// change the view
			$scope.changeView($scope.tabDivs[index].url);
			console.log("Selected " + index);
		};
    }]);