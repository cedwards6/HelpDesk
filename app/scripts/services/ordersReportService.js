angular.module('helpDesk').factory('ordersReportService', function ($q, $localStorage, $http, $window, globals) {
    var ordersReportService = {},
        userObj = {},
        url;

    var _getCustInfo = function(custId) {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getCustInfoExecute?CustomerID=' + custId);
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getCustInfoExecute?custID=' + custId);
    };
    var _getTodaysDate = function() {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysDateExecute');
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysDateExecute');
    };
    var _getCustName = function(custId) {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getCustNameExecute?CustomerID=' + custId);
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getCustNameExecute?custID=' + custId);
    };

    var _getNubridgesData = function(startDate, endDate) {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getNubridgesDataExecute?startDate=' + startDate + '&endDate=' + endDate);
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getNubridgesDataExecute?startDate=' + startDate + '&endDate=' + endDate);
    };

    var _getMonthByDate = function(startDate, endDate) {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getMonthByDateExecute?startDate=' + startDate + '&endDate=' + endDate);
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getMonthByDateExecute?startDate=' + startDate + '&endDate=' + endDate);
    };
    var _getLastDay = function() {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getLastDayExecute');
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getLastDayExecute');
    };

    var _get3rdMonth = function() {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!get3rdMonthExecute');
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!get3rdMonthExecute');
    };

    var _get4thMonth = function() {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!get4thMonthExecute');
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!get4thMonthExecute');
    };

    var _get5thMonth = function() {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!get5thMonthExecute');
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!get5thMonthExecute');
    };

    var _get6thMonth = function() {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!get6thMonthExecute');
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!get6thMonthExecute');
    };

    var _getprvMonth = function() {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getprvMonthExecute');
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getprvMonthExecute');
    };

    var _getMonth = function() {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getMonthExecute');
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getMonthExecute');
    };

    var _getOrderReport = function() {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getOrderReportExecute');
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getOrderReportExecute');
    };

    var _getSelectedMonth = function(date) {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getSelectedMonthExecute?Date=' & date);
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getSelectedMonthExecute?Date=' & date);
    };

    var _getTodaysPortalVAIOrders = function() {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysPortalVAIOrdersExecute');
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getTodaysPortalVAIOrdersExecute');
    };

    var _getCurrentMonthName = function() {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getCurrentMonthNameExecute');
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getCurrentMonthNameExecute');
    };

    var _getPreviousMonthName = function() {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getPreviousMonthNameExecute');
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getPreviousMonthNameExecute');
    };

    var _getPrevious2MonthName = function() {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getPrevious2MonthNameExecute');
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getPrevious2MonthNameExecute');
    };

    var _getPrevious3MonthName = function() {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getPrevious3MonthNameExecute');
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getPrevious3MonthNameExecute');
    };

    var _getPrevious4MonthName = function() {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getPrevious4MonthNameExecute');
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getPrevious4MonthNameExecute');
    };

    var _getPrevious5MonthName = function() {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getPrevious5MonthNameExecute');
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getPrevious5MonthNameExecute');
    };

    var _getPrevious6MonthName = function() {
        return $http.get(globals.url + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getPrevious6MonthNameExecute');
        //return $http.get('http://10.225.150.28:10039' + '/SDCWebServices/webengine/com/smithdrug/services/ordersReport/Action!getPrevious6MonthNameExecute');
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
    ordersReportService.getTodaysPortalVAIOrders = _getTodaysPortalVAIOrders;
    ordersReportService.getCurrentMonthName = _getCurrentMonthName;
    ordersReportService.getPreviousMonthName = _getPreviousMonthName;
    ordersReportService.getPrevious2MonthName = _getPrevious2MonthName;
    ordersReportService.getPrevious3MonthName = _getPrevious3MonthName;
    ordersReportService.getPrevious4MonthName = _getPrevious4MonthName;
    ordersReportService.getPrevious5MonthName = _getPrevious5MonthName;
    ordersReportService.getPrevious6MonthName = _getPrevious6MonthName;

    return ordersReportService;

});
