'use strict';
console.log('\'Allo, Noogie!');

var myApp = {} || myApp;
var noogieApp = {} || window.noogieApp;
noogieApp.ngAppName = 'myApp';

'use strict';
/*global angular*/

(function (angular) {

    myApp.ngRoutes = ['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'routes/main.html'
            }).
            when('/about', {
                templateUrl: 'routes/about.html'
            }).
            //*** route:scripts
            otherwise('/');
    }];

    angular.module(noogieApp.ngAppName, ['ngRoute'])
        .config(myApp.ngRoutes);

})(angular);
