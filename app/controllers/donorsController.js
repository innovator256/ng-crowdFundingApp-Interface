(function (){

    
    var donorsController = function($scope, donorFactory){
         $scope.sortBy = "address";
        $scope.reverse = "false";
        $scope.customers = [];
        
        function init(){
            
            $scope.donors = donorFactory.getDonors();
            
        }
        
        init();
        $scope.doSort = function(propName){
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
            
        };
        
    };
    
    
    
angular.module('donorInterfaceapp')
.controller('donorsController', ['$scope','donorFactory', donorsController]);


}());