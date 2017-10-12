angular.module('helpDesk').controller('orderStatsCtrl', function ($state, $rootScope, $scope, $uibModal, ordersReportService, $localStorage, $sessionStorage, $q) {

    $scope.currentVAI = [];
    $scope.currentPortal = [];

    $scope.lastDayAxway = [];
    $scope.lastDayLegisym = [];
    $scope.lastDayDS = [];
    $scope.lastDayPortal = [];
    $scope.lastDayEDI = [];
    $scope.lastDayOD = [];
    $scope.lastDayIRx = [];
    $scope.lastDayTotal = 0;
    $scope.lastDayAxwayPct = 0;
    $scope.lastDayLegisymPct = 0;
    $scope.lastDayDSPct = 0;
    $scope.lastDayPortalPct = 0;
    $scope.lastDayEDIPct = 0;
    $scope.lastDayODPct = 0;
    $scope.lastDayIRxPct = 0;

    $scope.currentMonth = [];
    $scope.mtdAxway = [];
    $scope.mtdLegisym = [];
    $scope.mtdDS = [];
    $scope.mtdPortal = [];
    $scope.mtdEDI = [];
    $scope.mtdOD = [];
    $scope.mtdIRx = [];
    $scope.mtdTotal = 0;
    $scope.mtdAxwayPct = 0;
    $scope.mtdLegisymPct = 0;
    $scope.mtdDSPct = 0;
    $scope.mtdPortalPct = 0;
    $scope.mtdEDIPct = 0;
    $scope.mtdODPct = 0;
    $scope.mtdIRxPct = 0;

    $scope.prvMonth = [];
    $scope.prvAxway = [];
    $scope.prvLegisym = [];
    $scope.prvDS = [];
    $scope.prvPortal = [];
    $scope.prvEDI = [];
    $scope.prvOD = [];
    $scope.prvIRx = [];
    $scope.prvTotal = 0;
    $scope.prvAxwayPct = 0;
    $scope.prvLegisymPct = 0;
    $scope.prvDSPct = 0;
    $scope.prvPortalPct = 0;
    $scope.prvEDIPct = 0;
    $scope.prvODPct = 0;
    $scope.prvIRxPct = 0;

    $scope.prv2Month = [];
    $scope.prv2Axway = [];
    $scope.prv2Legisym = [];
    $scope.prv2DS = [];
    $scope.prv2Portal = [];
    $scope.prv2EDI = [];
    $scope.prv2OD = [];
    $scope.prv2IRx = [];
    $scope.prv2Total = 0;
    $scope.prv2AxwayPct = 0;
    $scope.prv2LegisymPct = 0;
    $scope.prv2DSPct = 0;
    $scope.prv2PortalPct = 0;
    $scope.prv2EDIPct = 0;
    $scope.prv2ODPct = 0;
    $scope.prv2IRxPct = 0;

    $scope.prv3Month = [];
    $scope.prv3Axway = [];
    $scope.prv3Legisym = [];
    $scope.prv3DS = [];
    $scope.prv3Portal = [];
    $scope.prv3EDI = [];
    $scope.prv3OD = [];
    $scope.prv3IRx = [];
    $scope.prv3Total = 0;
    $scope.prv3AxwayPct = 0;
    $scope.prv3LegisymPct = 0;
    $scope.prv3DSPct = 0;
    $scope.prv3PortalPct = 0;
    $scope.prv3EDIPct = 0;
    $scope.prv3ODPct = 0;
    $scope.prv3IRxPct = 0;

    $scope.prv4Month = [];
    $scope.prv4Axway = [];
    $scope.prv4Legisym = [];
    $scope.prv4DS = [];
    $scope.prv4Portal = [];
    $scope.prv4EDI = [];
    $scope.prv4OD = [];
    $scope.prv4IRx = [];
    $scope.prv4Total = 0;
    $scope.prv4AxwayPct = 0;
    $scope.prv4LegisymPct = 0;
    $scope.prv4DSPct = 0;
    $scope.prv4PortalPct = 0;
    $scope.prv4EDIPct = 0;
    $scope.prv4ODPct = 0;
    $scope.prv4IRxPct = 0;

    // FUNCTIONS //
    //////////////
    function initorderStatsCtrl() {
        //console.log('order Stats');
        ordersReportService.getTodaysPortalVAIOrders().then(function(response){
            if (angular.isDefined(response.data)) {
                $scope.currentVAI = response.data.RowSet.Row[0].TODAYSVAIORDERS;
                $scope.currentPortal = response.data.RowSet.Row[0].TODAYSPORTALORDERS;
            }
        });
        ordersReportService.getLastDay().then(function(response){
            if (angular.isDefined(response.data)){
                //console.log("in isdefined");
                $scope.lastDayAxway = response.data.RowSet.Row[0].AXWAY;
                $scope.lastDayTotal = $scope.lastDayTotal + $scope.lastDayAxway;
                $scope.lastDayLegisym = response.data.RowSet.Row[0].E222;
                $scope.lastDayTotal = $scope.lastDayTotal + $scope.lastDayLegisym;
                $scope.lastDayDS = response.data.RowSet.Row[0].DataSmith;
                $scope.lastDayTotal = $scope.lastDayTotal + $scope.lastDayDS;
                $scope.lastDayPortal = response.data.RowSet.Row[0].Portal;
                $scope.lastDayTotal = $scope.lastDayTotal + $scope.lastDayPortal;
                $scope.lastDayEDI = response.data.RowSet.Row[0].EDI;
                $scope.lastDayTotal = $scope.lastDayTotal + $scope.lastDayEDI;
                $scope.lastDayOD = response.data.RowSet.Row[0].Orderdesk;
                $scope.lastDayTotal = $scope.lastDayTotal + $scope.lastDayOD;
                $scope.lastDayIRx = response.data.RowSet.Row[0].SmithSelect;
                $scope.lastDayTotal = $scope.lastDayTotal + $scope.lastDayIRx;
                $scope.lastDayAxwayPct = $scope.lastDayAxway / $scope.lastDayTotal * 100;
                $scope.lastDayLegisymPct = $scope.lastDayLegisym / $scope.lastDayTotal * 100;
                $scope.lastDayDSPct = $scope.lastDayDS / $scope.lastDayTotal * 100;
                $scope.lastDayPortalPct = $scope.lastDayPortal / $scope.lastDayTotal * 100;
                $scope.lastDayEDIPct = $scope.lastDayEDI / $scope.lastDayTotal * 100;
                $scope.lastDayODPct = $scope.lastDayOD / $scope.lastDayTotal * 100;
                $scope.lastDayIRxPct = $scope.lastDayIRx / $scope.lastDayTotal * 100;
                console.log('last day', $scope.lastDayTotal);
                //console.log('last day', lastDay);
            }
        });
        ordersReportService.getCurrentMonthName().then(function(response){
            if (angular.isDefined(response.data)) {
                $scope.currentMonth = response.data.RowSet.Row[0].Month_Name;
            }
        });
        ordersReportService.getMonth().then(function(response){
            if (angular.isDefined(response.data)) {
                $scope.mtdAxway = response.data.RowSet.Row[0].AXWAY;
                $scope.mtdTotal = $scope.mtdTotal + $scope.mtdAxway;
                $scope.mtdLegisym = response.data.RowSet.Row[0].E222;
                $scope.mtdTotal = $scope.mtdTotal + $scope.mtdLegisym;
                $scope.mtdDS = response.data.RowSet.Row[0].DataSmith;
                $scope.mtdTotal = $scope.mtdTotal + $scope.mtdDS;
                $scope.mtdPortal = response.data.RowSet.Row[0].Portal;
                $scope.mtdTotal = $scope.mtdTotal + $scope.mtdPortal;
                $scope.mtdEDI = response.data.RowSet.Row[0].EDI;
                $scope.mtdTotal = $scope.mtdTotal + $scope.mtdEDI;
                $scope.mtdOD = response.data.RowSet.Row[0].Orderdesk;
                $scope.mtdTotal = $scope.mtdTotal + $scope.mtdOD;
                $scope.mtdIRx = response.data.RowSet.Row[0].SmithSelect;
                $scope.mtdTotal = $scope.mtdTotal + $scope.mtdIRx;
                $scope.mtdAxwayPct = $scope.mtdAxway / $scope.mtdTotal * 100;
                $scope.mtdLegisymPct = $scope.mtdLegisym / $scope.mtdTotal * 100;
                $scope.mtdDSPct = $scope.mtdDS / $scope.mtdTotal * 100;
                $scope.mtdPortalPct = $scope.mtdPortal / $scope.mtdTotal * 100;
                $scope.mtdEDIPct = $scope.mtdEDI / $scope.mtdTotal * 100;
                $scope.mtdODPct = $scope.mtdOD / $scope.mtdTotal * 100;
                $scope.mtdIRxPct = $scope.mtdIRx / $scope.mtdTotal * 100;
            }
        });

        ordersReportService.getPreviousMonthName().then(function(response){
            if (angular.isDefined(response.data)) {
                $scope.prvMonth = response.data.RowSet.Row[0].Month_Name;
            }
        });
        ordersReportService.getprvMonth().then(function(response){
            if (angular.isDefined(response.data)) {
                $scope.prvAxway = response.data.RowSet.Row[0].AXWAY;
                $scope.prvTotal = $scope.prvTotal + $scope.prvAxway;
                $scope.prvLegisym = response.data.RowSet.Row[0].E222;
                $scope.prvTotal = $scope.prvTotal + $scope.prvLegisym;
                $scope.prvDS = response.data.RowSet.Row[0].DataSmith;
                $scope.prvTotal = $scope.prvTotal + $scope.prvDS;
                $scope.prvPortal = response.data.RowSet.Row[0].Portal;
                $scope.prvTotal = $scope.prvTotal + $scope.prvPortal;
                $scope.prvEDI = response.data.RowSet.Row[0].EDI;
                $scope.prvTotal = $scope.prvTotal + $scope.prvEDI;
                $scope.prvOD = response.data.RowSet.Row[0].Orderdesk;
                $scope.prvTotal = $scope.prvTotal + $scope.prvOD;
                $scope.prvIRx = response.data.RowSet.Row[0].SmithSelect;
                $scope.prvTotal = $scope.prvTotal + $scope.prvIRx;
                $scope.prvAxwayPct = $scope.prvAxway / $scope.prvTotal * 100;
                $scope.prvLegisymPct = $scope.prvLegisym / $scope.prvTotal * 100;
                $scope.prvDSPct = $scope.prvDS / $scope.prvTotal * 100;
                $scope.prvPortalPct = $scope.prvPortal / $scope.prvTotal * 100;
                $scope.prvEDIPct = $scope.prvEDI / $scope.prvTotal * 100;
                $scope.prvODPct = $scope.prvOD / $scope.prvTotal * 100;
                $scope.prvIRxPct = $scope.prvIRx / $scope.prvTotal * 100;
            }
        });

        ordersReportService.getPrevious2MonthName().then(function(response){
            if (angular.isDefined(response.data)) {
                $scope.prv2Month = response.data.RowSet.Row[0].Month_Name;
            }
        });
        ordersReportService.get3rdMonth().then(function(response){
            if (angular.isDefined(response.data)) {
                $scope.prv2Axway = response.data.RowSet.Row[0].AXWAY;
                $scope.prv2Total = $scope.prv2Total + $scope.prv2Axway;
                $scope.prv2Legisym = response.data.RowSet.Row[0].E222;
                $scope.prv2Total = $scope.prv2Total + $scope.prv2Legisym;
                $scope.prv2DS = response.data.RowSet.Row[0].DataSmith;
                $scope.prv2Total = $scope.prv2Total + $scope.prv2DS;
                $scope.prv2Portal = response.data.RowSet.Row[0].Portal;
                $scope.prv2Total = $scope.prv2Total + $scope.prv2Portal;
                $scope.prv2EDI = response.data.RowSet.Row[0].EDI;
                $scope.prv2Total = $scope.prv2Total + $scope.prv2EDI;
                $scope.prv2OD = response.data.RowSet.Row[0].Orderdesk;
                $scope.prv2Total = $scope.prv2Total + $scope.prv2OD;
                $scope.prv2IRx = response.data.RowSet.Row[0].SmithSelect;
                $scope.prv2Total = $scope.prv2Total + $scope.prv2IRx;
                $scope.prv2AxwayPct = $scope.prv2Axway / $scope.prv2Total * 100;
                $scope.prv2LegisymPct = $scope.prv2Legisym / $scope.prv2Total * 100;
                $scope.prv2DSPct = $scope.prv2DS / $scope.prv2Total * 100;
                $scope.prv2PortalPct = $scope.prv2Portal / $scope.prv2Total * 100;
                $scope.prv2EDIPct = $scope.prv2EDI / $scope.prv2Total * 100;
                $scope.prv2ODPct = $scope.prv2OD / $scope.prv2Total * 100;
                $scope.prv2IRxPct = $scope.prv2IRx / $scope.prv2Total * 100;
            }
        });

        ordersReportService.getPrevious3MonthName().then(function(response){
            if (angular.isDefined(response.data)) {
                $scope.prv3Month = response.data.RowSet.Row[0].Month_Name;
            }
        });
        ordersReportService.get4thMonth().then(function(response){
            if (angular.isDefined(response.data)) {
                $scope.prv3Axway = response.data.RowSet.Row[0].AXWAY;
                $scope.prv3Total = $scope.prv3Total + $scope.prv3Axway;
                $scope.prv3Legisym = response.data.RowSet.Row[0].E222;
                $scope.prv3Total = $scope.prv3Total + $scope.prv3Legisym;
                $scope.prv3DS = response.data.RowSet.Row[0].DataSmith;
                $scope.prv3Total = $scope.prv3Total + $scope.prv3DS;
                $scope.prv3Portal = response.data.RowSet.Row[0].Portal;
                $scope.prv3Total = $scope.prv3Total + $scope.prv3Portal;
                $scope.prv3EDI = response.data.RowSet.Row[0].EDI;
                $scope.prv3Total = $scope.prv3Total + $scope.prv3EDI;
                $scope.prv3OD = response.data.RowSet.Row[0].Orderdesk;
                $scope.prv3Total = $scope.prv3Total + $scope.prv3OD;
                $scope.prv3IRx = response.data.RowSet.Row[0].SmithSelect;
                $scope.prv3Total = $scope.prv3Total + $scope.prv3IRx;
                $scope.prv3AxwayPct = $scope.prv3Axway / $scope.prv3Total * 100;
                $scope.prv3LegisymPct = $scope.prv3Legisym / $scope.prv3Total * 100;
                $scope.prv3DSPct = $scope.prv3DS / $scope.prv3Total * 100;
                $scope.prv3PortalPct = $scope.prv3Portal / $scope.prv3Total * 100;
                $scope.prv3EDIPct = $scope.prv3EDI / $scope.prv3Total * 100;
                $scope.prv3ODPct = $scope.prv3OD / $scope.prv3Total * 100;
                $scope.prv3IRxPct = $scope.prv3IRx / $scope.prv3Total * 100;
            }
        });

        ordersReportService.getPrevious4MonthName().then(function(response){
            if (angular.isDefined(response.data)) {
                $scope.prv4Month = response.data.RowSet.Row[0].Month_Name;
            }
        });
        ordersReportService.get5thMonth().then(function(response){
            if (angular.isDefined(response.data)) {
                $scope.prv4Axway = response.data.RowSet.Row[0].AXWAY;
                $scope.prv4Total = $scope.prv4Total + $scope.prv4Axway;
                $scope.prv4Legisym = response.data.RowSet.Row[0].E222;
                $scope.prv4Total = $scope.prv4Total + $scope.prv4Legisym;
                $scope.prv4DS = response.data.RowSet.Row[0].DataSmith;
                $scope.prv4Total = $scope.prv4Total + $scope.prv4DS;
                $scope.prv4Portal = response.data.RowSet.Row[0].Portal;
                $scope.prv4Total = $scope.prv4Total + $scope.prv4Portal;
                $scope.prv4EDI = response.data.RowSet.Row[0].EDI;
                $scope.prv4Total = $scope.prv4Total + $scope.prv4EDI;
                $scope.prv4OD = response.data.RowSet.Row[0].Orderdesk;
                $scope.prv4Total = $scope.prv4Total + $scope.prv4OD;
                $scope.prv4IRx = response.data.RowSet.Row[0].SmithSelect;
                $scope.prv4Total = $scope.prv4Total + $scope.prv4IRx;
                $scope.prv4AxwayPct = $scope.prv4Axway / $scope.prv4Total * 100;
                $scope.prv4LegisymPct = $scope.prv4Legisym / $scope.prv4Total * 100;
                $scope.prv4DSPct = $scope.prv4DS / $scope.prv4Total * 100;
                $scope.prv4PortalPct = $scope.prv4Portal / $scope.prv4Total * 100;
                $scope.prv4EDIPct = $scope.prv4EDI / $scope.prv4Total * 100;
                $scope.prv4ODPct = $scope.prv4OD / $scope.prv4Total * 100;
                $scope.prv4IRxPct = $scope.prv4IRx / $scope.prv4Total * 100;
            }
        });
    }

    /// SCOPE FUNCTIONS ///
    //////////////////////


    // INIT //
    /////////
    initorderStatsCtrl();

});