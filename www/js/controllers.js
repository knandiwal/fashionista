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
    .controller('MainCtrl', ['$scope', function ($scope) {
    	// put Main Shit In here
    }])

    // View 2 Controller (needs a better name)
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
    }])
    // Control the divs on the tab bar
    .controller('TabCtrl', ['$scope', '$location', function ($scope, $location) {
		$scope.tabDivs = [
			{ 'class' : '', name : 'Profile', url : '/profile' },
			{ 'class' : '', name : 'The Walk', url : '/thewalk' },
			{ 'class' : '', name : 'Discover', url : '/discover' }
		];

		$scope.lastSelectedDiv = 0;
		$scope.currentDiv = "";

		$scope.changeView = function(view){
			$location.path(view);	// use a path, not hash
		};

		$scope.setSelected = function(index) {
			if($scope.lastSelectedDiv != -1) {
				$scope.tabDivs[$scope.lastSelectedDiv].class = '';
			}
			$scope.lastSelectedDiv = index;
			$scope.tabDivs[index].class = 'active';
			// change the view
			$scope.changeView($scope.tabDivs[index].url);
			$scope.currentDiv = $scope.tabDivs[index].name;
			console.log("Selected " + $scope.tabDivs[index].url);
			console.log("name:" + $scope.tabDivs[index].name);
			console.log("currentDiv: " + $scope.currentDiv);
		};

		// Do all initialization code (stuff before the view is rendered) here
		$scope.init = function() {
			// Set the initial view to Profile
			$scope.changeView($scope.tabDivs[0].url);
			$scope.tabDivs[0].class = 'active';
		};
    }]);