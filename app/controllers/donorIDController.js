(function (){  
angular.module('donorInterfaceapp')
.controller('donorIDController', ['$scope','$routeParams','donorFactory', function($scope, $routeParams, donorFactory){
    
    
    
   // var donorIDController = 
        
        
        
        var donorID = $routeParams.donorID;
        $scope.donor = null;
        
        function init(){
          
            $scope.donor = donorFactory.getDonor(donorID);
          
        };
        
        
        
        init();
        
    }
    
  
                                 ]);
    
}());