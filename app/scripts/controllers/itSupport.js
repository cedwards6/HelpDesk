angular.module('helpDesk').controller('itSupportCtrl', function ($state, $rootScope, $scope, $uibModal, CustomerService, $localStorage, $sessionStorage, $q) {

    var customerId;
    $scope.customerInfo = [];

    // FUNCTIONS //
    //////////////
    function inititSupportCtrl() {
        //console.log('it support');

    }

    /// SCOPE FUNCTIONS ///
    //////////////////////

    $scope.search = function() {
        //console.log('in search', $scope.searchAcct);
        customerId = $scope.searchAcct;
        // make webservice calls here
        CustomerService.getAllCustomerInfo(customerId).then(function(response){
           //console.log("response ", response);
           if (angular.isDefined(response.data)){
                //console.log("in isdefined");
                $scope.customerInfo = [response];
           }
        });
    }


    // INIT //
    /////////
    inititSupportCtrl();

});