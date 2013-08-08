// Create The App Scope
angular.module('Fashionista', ['Fashionista.services', 'Fashionista.controllers'])
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    }])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'MainCtrl',
            templateUrl: 'partials/thewalk.html'
        })
        // view
        .when('/profile', {
            controller: 'ProfileCtrl',
            templateUrl: 'partials/profile.html'
        })
        .when('/discover', {
            controller: 'ViewCtrl',
            templateUrl: 'partials/discover.html'
        })
        .when('/thewalk', {
            controller: 'MainCtrl',
            templateUrl: 'partials/thewalk.html'
        })
        // if none of these urls are requested go back to the login view
        .otherwise({redirectTo: '/'});
    }]);
