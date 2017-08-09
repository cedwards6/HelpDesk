angular.module('helpDesk').factory('CustomerService', function ($q, $localStorage, $http, $window, globals) {
    var CustomerService = {},
        userObj = {},
        url;

    var _getAllCustomerInfo = function(customerId) {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/customersService/Action!getAllCustomerInfoExecute?CustomerID=' + customerId);
    };


    CustomerService.getAllCustomerInfo  = _getAllCustomerInfo;

    return CustomerService;

});
