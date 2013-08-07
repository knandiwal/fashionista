// Create The App Scope
angular.module('Fashionista', ['Fashionista.services', 'Fashionista.controllers'])
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    }])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/', {
            // Login Window
            controller: 'MainCtrl',
            templateUrl: 'partials/main.html'
        })
        // Profile
        .when('/view', {
            controller: 'ViewCtrl',
            templateUrl: 'partials/view.html'
        })
        // if none of these urls are requested go back to the login view
        .otherwise({redirectTo: '/'});
    }]);
