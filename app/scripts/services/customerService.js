angular.module('helpDesk').factory('CustomerService', function ($q, $localStorage, $http, $window, globals) {
    var CustomerService = {},
        userObj = {},
        url;

    var _getAllCustomerInfo = function(customerId) {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/customersService/Action!getAllCustomerInfoExecute?CustomerID=' + customerId);
        return $http.get('http://10.23.40.125:10039' + '/SDCWebServices/webengine/com/smithdrug/services/customersService/Action!getAllCustomerInfoExecute?CustomerID=' + customerId);
    };
    var _getPortalOrderHeaderByCustomer = function(customerId) {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/customersService/Action!getPortalOrderHeaderByCustomerExecute?CustomerID=' + customerId);
        return $http.get('http://10.23.40.125:10039' + '/SDCWebServices/webengine/com/smithdrug/services/customersService/Action!getPortalOrderHeaderByCustomerExecute?CustomerID=' + customerId);
    };
    var _getCSOSOrderHeaderByCustomer = function(customerId) {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/customersService/Action!getCSOSOrderHeaderByCustomerExecute?CustomerID=' + customerId);
        return $http.get('http://10.23.40.125:10039' + '/SDCWebServices/webengine/com/smithdrug/services/customersService/Action!getCSOSOrderHeaderByCustomerExecute?CustomerID=' + customerId);
    };

    CustomerService.getAllCustomerInfo  = _getAllCustomerInfo;
    CustomerService.getPortalOrderHeaderByCustomer = _getPortalOrderHeaderByCustomer;
    CustomerService.getCSOSOrderHeaderByCustomer = _getCSOSOrderHeaderByCustomer;

    return CustomerService;

});
