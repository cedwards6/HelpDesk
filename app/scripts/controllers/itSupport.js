angular.module('helpDesk').controller('itSupportCtrl', function ($state, $rootScope, $scope, $uibModal, $localStorage, $sessionStorage, $q) {

    var customerId;

    // FUNCTIONS //
    //////////////
    function inititSupportCtrl() {
        //console.log('it support');

    }

    /// SCOPE FUNCTIONS ///
    //////////////////////

    $scope.search = function() {
        console.log('in search', $scope.searchAcct);
        customerId = $scope.searchAcct;
        // make webservice calls here

    }


    // INIT //
    /////////
    inititSupportCtrl();

});