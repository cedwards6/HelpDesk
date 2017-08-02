// first controller here
angular.module('helpDesk').controller('MainCtrl', function ($state, $rootScope, $scope, $localStorage, $sessionStorage, $q) {
	// CONSTANTS //
	//////////////
	$scope.$storage = $sessionStorage;
	$scope.$localStorage = $localStorage;
	$scope.navbar = [
		{
			name: 'Order Stats',
			route: 'orderStats'
		},
		{
			name: 'Customer Info',
			route: 'itSupport'
		},
		{
			name: 'Customer Admin',
			route: 'customerAdmin'
		},
		{
			name: 'Orders Not Received',
			route: 'onr'
		},
        {
            name: 'Express 222 Setup',
            route: 'express222Setup'
        }
	];

    // FUNCTIONS //
    //////////////
	function initMainCtrl() {

	}

    /// SCOPE FUNCTIONS ///
    //////////////////////



    /// INIT ///
    ///////////
    initMainCtrl();

});