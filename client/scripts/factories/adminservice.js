AppAdmin.factory("AdminService", ["$http", function($http){
    var admin = {};

    var alterDefaults = function(object){
        $http.put('/defaults/' + admin.defaults._id, object).then(function(){
            console.log(object);
        });
    };



    return {
        admin: admin,
        alterDefaults : alterDefaults,
    };
}]);
