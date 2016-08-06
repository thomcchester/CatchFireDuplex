App.controller('InputController',  ['$scope', '$log', '$http', '$window', '$mdSidenav', "$mdDialog", "$mdMedia", 'ClientService',function($scope, $log, $http, $window, $mdSidenav, $mdDialog, $mdMedia, ClientService) {
    //Independent Variables
    var clientService = ClientService;


    // $scope.showAlert = function(ev) {
    //     $mdDialog.show(
    //       $mdDialog.alert()
    //         .parent(angular.element(document.querySelector('#all')))
    //         // .openFrom(angular.element(document.querySelector('#zip-code')))
    //         // .closeTo(angular.element(document.querySelector('#zip-code')))
    //         .clickOutsideToClose(true)
    //         .title("Let's get started!")
    //         .textContent('You can specify some description text in here.')
    //         .ariaLabel('Alert Dialog Demo')
    //         .ok('Got it!')
    //         .targetEvent(ev)
    //     );
    // };
    //
    // $scope.showAlert();

    $scope.toggleMenu = function() {
        $mdSidenav('left').toggle();
    };




$scope.inputData = {};

$scope.minMax = {};

$scope.getDefaults = function() {
  $http.get("/defaults").then(function(response){
      defaultVariables = response.data[0];
      $scope.minMax = defaultVariables;

      $scope.inputData.monthlyRentPersonal= defaultVariables.monthlyRentPersonalDef;
      $scope.inputData.monthlyRentTenant= defaultVariables.monthlyRentTenantDef;

  });
};
$scope.getDefaults();
console.log("duplexBuy", $scope.inputData.duplexBuy)

var service = ClientService;

$scope.$watchCollection('inputData', function(newVal, oldVal){
    console.log(newVal, "newval");
    console.log("duplexBuy", $scope.inputData.duplexBuy);




    console.log(totDuplex(newVal.years*12,newVal.duplexBuy,newVal.appreciationRate), "duplex Function")

      $scope.buy[1].v = Math.floor(totalBuy(newVal.years*12,newVal.targetPrice,newVal.appreciationRateHome));
      console.log($scope.buy[1].v, "buy");
      $scope.rent[1].v = Math.floor(rentFunction(newVal.years*12));
      console.log($scope.rent[1].v, "rent");
      $scope.buyAndRent[1].v = Math.floor(totDuplex(newVal.years*12,newVal.duplexBuy,newVal.appreciationRate));
      console.log($scope.buyAndRent[1].v, "duplex");





      // var dynamicRows = [];
      // var populateDynamicRows = function(){
      //     for (var i = 0; i < newVal.years*12; i++) {
      //         var newRow = {
      //                         "c":
      //                             [
      //                                 {
      //                                     "v": i
      //                                 },
      //                                 {
      //                                     "v": $scope.rentValues[i]
      //                                 },
      //                                 {
      //                                     "v": $scope.buyValues[i]
      //                                 },
      //                                 {
      //                                     "v": $scope.buyAndRentValues[i]
      //                                 }
      //                             ]
      //         }
      //         dynamicRows.push(newRow);
      //     }
      // }
      // populateDynamicRows();

      // // $scope.hiddenChartObject = {
      //     "type": "LineChart",
      //     "data": {
      //         "cols": [
      //             {
      //                 "id": "year",
      //                 "label": "Years",
      //                 "type": "string"
      //             },
      //             {
      //                 "id": "buy-line",
      //                 "label": "Rent",
      //                 "type": "number"
      //             },
      //             {
      //                 "id": "rent-line",
      //                 "label": "Buy",
      //                 "type": "number"
      //             },
      //             {
      //                 "id": "buyAndRent-line",
      //                 "label": "Duplex",
      //                 "type": "number"
      //             }
      //         ],
      //         "rows": dynamicRows
      //     },
      //     "options": {
      //         "title": "Cost Of Investment Over Time",
      //         "isStacked": true,
      //         "fill": 20,
      //         "displayExactValues": true,
      //         "vAxis": {
      //             "title": "Return"
      //
      //         },
      //         "hAxis": {
      //             "title": "Months"
      //         },
      //         "animation":{
      //             duration: 300,
      //             easing: 'out',
      //         },
      //         "colors":['lightblue', 'blue', 'rgb(255,64,129)']
      //
      //     },
      //     "formatters": {}
      // // }


});




    ///chart stuffff
    $scope.$watch.years=3;

    $scope.myChartObject = {};

    $scope.myChartObject.type = "ColumnChart";



    // $scope.$watch('monthlyRentPersonal', function(newVal, oldVal) {
    //     $log.info newVal
    // });

    $scope.rent = [
        {v: "Rent"},
        {v: 200},
        {v: 'lightblue'}
    ];

    $scope.buy = [
        {v: "Buy"},
        {v: $scope.outputData},
        {v: 'blue'}
    ];

    $scope.buyAndRent = [
        {v: "Duplex"},
        {v: 600},
        {v: 'rgb(255,64,129)'}
    ];

    $scope.myChartObject.data = {
        "cols": [
            {id: "options", label: "Options", type: "string"},
            {id: "dollars", label: "Dollars", type: "number"},
            {role: "style", type: "string"}
        ],
        "rows": [

            {c: $scope.rent},
            {c: $scope.buy},
            {c: $scope.buyAndRent}
        ]
    };

    $scope.myChartObject.options = {
        'title': 'Cost Comparison',
        animation:{
            duration: 1000,
            easing: 'out',
        },
        legend: "none"
    };




}]);
