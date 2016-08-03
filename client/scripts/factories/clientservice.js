App.factory("ClientService", ["$http", function($http){
    var client = {};

    var alterDefaults = function(object){
        $http.put('/defaults/' + object._id, object).then(function(){
            getDefaults();
        });
    };

    var getDefaults = function(){
        $http.get("/defaults").then(function(response){
            client.defaults = response.data[0];
        });
    };



    /* the following variable and function are for loading initial values
    into the DB if there are none. there should be no need to include
    them into the return object for this factory. */
    var initialValues = {
        monthlyRentTenantDef:1100,
        monthlyRentTenantMin:100,


    };

    var checkIfThereIsData = function(){
        $http.get('/checkDB').then(function(response){
            var bool = response.data;
            if(bool === false){
                $http.post('/defaults', initialValues).then(function(response){
                    getDefaults();
                });
            }else{
                getDefaults();
            }
        });
    };
    checkIfThereIsData();

    return {
        alterDefaults: alterDefaults,
        client: client,
        getDefaults: getDefaults,
    };
}]);
