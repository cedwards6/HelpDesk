//define you angular app here and routing too
var hD = angular.module('helpDesk', ['ui.router',
'ngStorage',
'ui.bootstrap',
'uiRouterStyles',
'wt.responsive',
'infinite-scroll'
]);

    hD.value('globals', {
        url: 'https://egate2.smithdrug.com'
    })
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('ordersReport', {
                url:'/',
                params: {
                    obj: null
                },
                templateUrl: 'app/views/ordersReport.html',
                controller: 'orderStatsCtrl'
            })
            .state('itSupport', {
                url:'/itSupport',
                params: {
                    obj: null
                },
                templateUrl: 'app/views/itSupport.html',
                controller: 'itSupportCtrl'
            });

    }]);