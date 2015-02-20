(function (){

angular.module('donorInterfaceapp')
.controller('donorsController', ['$scope','donorFactory','$http' function($scope, donorFactory){
      // var donorsController = 
        $scope.sortBy = "address";
        $scope.reverse = "false";
        $scope.donors = [];
        
        function init(){
            
        donorFactory.getDonors()
        .success(function(donors){
            $scope.donors = donors;
            
        })
        .error(function(data, status, header, config) {
            // handle error
            
        });
        
        init();
        $scope.doSort = function(propName){
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
            
        };
        
    }
                                ]);
    
    
    
}());