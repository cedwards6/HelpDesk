angular.module('helpDesk').controller('itSupportCtrl', function ($state, $rootScope, $scope, $uibModal, CustomerService, $localStorage, $sessionStorage, $q) {

    var customerId;
    $scope.customerInfo = [];
    $scope.portalOrder = [];
    $scope.csosOrder = [];

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
                $scope.customerInfo = response.data.Row;
                //console.log('customer info', $scope.customerInfo);
           }
        });
        CustomerService.getPortalOrderHeaderByCustomer(customerId).then(function(response){
           //console.log("response", response);
           if (angular.isDefined(response.data)){
               $scope.portalOrder = response.data.RowSet.Row;
               //console.log("portalOrder", response.data.RowSet.Row);
           }
        });
        CustomerService.getCSOSOrderHeaderByCustomer(customerId).then(function(response){
            //console.log("response", response);
            if (angular.isDefined(response.data)){
                $scope.csosOrder = response.data.RowSet.Row;
                //console.log("csosOrder", response.data.RowSet.Row);
            }
        });

    }


    // INIT //
    /////////
    inititSupportCtrl();

});