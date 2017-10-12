angular.module('helpDesk').controller('orderStatsCtrl', function ($state, $rootScope, $scope, $uibModal, ordersReportService, $localStorage, $sessionStorage, $q) {

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

    // FUNCTIONS //
    //////////////
    function initorderStatsCtrl() {
        //console.log('order Stats');
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
    }

    /// SCOPE FUNCTIONS ///
    //////////////////////


    // INIT //
    /////////
    initorderStatsCtrl();

});