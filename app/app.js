//define you angular app here and routing too
var hD = angular.module('helpDesk', ['ui.router',
'ngStorage',
'ui.bootstrap',
'uiRouterStyles',
'wt.responsive',
'infinite-scroll'
]);

    hD.values('globals', {
        url: 'http://staging2.smithdrug.com'
    })
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('orderStats', {
                url:'/',
                params: {
                    obj: null
                },
                templateUrl: 'app/views/orderStats.html',
                controller: 'orderStatsCtrl'
            })
            .state('itSupport', {
                url:'/',
                params: {
                    obj: null
                },
                templateUrl: 'app/views/itSupport.html',
                controller: 'itSupportCtrl'
            })
            .state('customerAdmin', {
                url:'/',
                params: {
                    obj: null
                },
                templateUrl: 'app/views/customerAdmin.html',
                controller: 'custAdminCtrl'
            })
            .state('onr', {
                url:'/',
                params: {
                    obj: null
                },
                templateUrl: 'app/views/onr.html',
                controller: 'onrCtrl'
            })
            .state('express222Setup', {
                url:'/',
                params: {
                    obj: null
                },
                templateUrl: 'app/views/express222Setup.html',
                controller: 'express222Ctrl'
            });

    }]);