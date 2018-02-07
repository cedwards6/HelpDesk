// first controller here
angular.module('helpDesk').controller('MainCtrl', function ($state, $rootScope, $scope, $localStorage, $sessionStorage, $q) {
	// CONSTANTS //
	//////////////
	$scope.$storage = $sessionStorage;
	$scope.$localStorage = $localStorage;
	$scope.navbar = [
		{
			name: 'Orders Report',
			route: 'ordersReport'
		},
		{
			name: 'Customer Info',
			route: 'itSupport'
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