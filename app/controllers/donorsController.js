(function (){

    
    var donorsController = function($scope, donorFactory){
         $scope.sortBy = "address";
        $scope.reverse = "false";
        $scope.customers = [];
        
        function init(){
            
            $scope.donors = donorsFactory.getDonors();
            
        }
        
        init();
        $scope.doSort = Function(propName){
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
            
        };
        
    };
    
    
    
angular.module('donorInterfaceapp')
.controller('donorsController', ['$scope', donorsController]);


}());