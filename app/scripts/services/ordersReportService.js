angular.module('helpDesk').factory('ordersReportService', function ($q, $localStorage, $http, $window, globals) {
    var ordersReportService = {},
        userObj = {},
        url;

    var _getCustInfo = function(custId) {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getCustInfoExecute?CustomerID=' + custId);
        return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getCustInfoExecute?custID=' + custId);
    };
    var _getTodaysDate = function() {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysDateExecute');
        return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysDateExecute');
    };
    var _getCustName = function(custId) {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getCustNameExecute?CustomerID=' + custId);
        return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getCustNameExecute?custID=' + custId);
    };

    var _getNubridgesData = function(startDate, endDate) {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getCustNameExecute?CustomerID=' + custId);
        return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getNubridgesDataExecute?startDate=' + startDate + '&endDate=' + endDate);
    };

    var _getMonthByDate = function(startDate, endDate) {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getCustNameExecute?CustomerID=' + custId);
        return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getMonthByDateExecute?startDate=' + startDate + '&endDate=' + endDate);
    };
    var _getLastDay = function() {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysDateExecute');
        return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getLastDayExecute');
    };

    var _get3rdMonth = function() {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysDateExecute');
        return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!get3rdMonthExecute');
    };

    var _get4thMonth = function() {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysDateExecute');
        return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!get4thMonthExecute');
    };

    var _get5thMonth = function() {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysDateExecute');
        return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!get5thMonthExecute');
    };

    var _get6thMonth = function() {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysDateExecute');
        return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!get6thMonthExecute');
    };

    var _getprvMonth = function() {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysDateExecute');
        return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getprvMonthExecute');
    };

    var _getMonth = function() {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysDateExecute');
        return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getMonthExecute');
    };

    var _getOrderReport = function() {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysDateExecute');
        return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getOrderReportExecute');
    };

    var _getSelectedMonth = function(date) {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysDateExecute');
        return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getSelectedMonthExecute?Date=' & date);
    };

    var_getTodaysPortalVAIOrders = function() {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysDateExecute');
        return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysPortalVAIOrdersExecute');
    };

    var_getCurrentMonthName = function() {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysDateExecute');
        return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getCurrentMonthNameExecute');
    };

    var_getPreviousMonthName = function() {
        //return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysDateExecute');
        return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getPreviousMonthNameExecute');
    };

    ordersReportService.getCustInfo  = _getCustInfo;
    ordersReportService.getTodaysDate = _getTodaysDate;
    ordersReportService.getCustName = _getCustName;
    ordersReportService.getNubridgesData = _getNubridgesData;
    ordersReportService.getMonthByDate = _getMonthByDate;
    ordersReportService.getLastDay = _getLastDay;
    ordersReportService.get3rdMonth = _get3rdMonth;
    ordersReportService.get4thMonth = _get4thMonth;
    ordersReportService.get5thMonth = _get5thMonth;
    ordersReportService.get6thMonth = _get6thMonth;
    ordersReportService.getprvMonth = _getprvMonth;
    ordersReportService.getMonth = _getMonth;
    ordersReportService.getOrderReport = _getOrderReport;
    ordersReportService.getSelectedMonth = _getSelectedMonth;

    return ordersReportService;

});
