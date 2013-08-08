// Create The App Scope
angular.module('fashionista', ['fashionista.services', 'fashionista.controllers'])
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    }])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        // Root Login View
        .when('/', {
            controller: 'LoginCtrl',
            templateUrl: 'partials/login.html'
        })
        // Profile
        .when('/profile', {
            controller: 'ProfileCtrl',
            templateUrl: 'partials/profile.html'
        })
        // Discover
        .when('/discover', {
            controller: 'ViewCtrl',
            templateUrl: 'partials/discover.html'
        })
        // The Walk
        .when('/thewalk', {
            controller: 'WalkCtrl',
            templateUrl: 'partials/thewalk.html'
        })
        // Instagram Callback URL
        .when('/instagram-authenticate', {
            controller: 'LoginCtrl',
            templateUrl: 'partials/authenticate-instagram.html'
        })
        // if none of these urls are requested go back to the login view
        .otherwise({redirectTo: '/'});
    }]);
