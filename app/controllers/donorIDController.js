(function (){  
angular.module('donorInterfaceapp')
.controller('donorIDController', ['$scope','$routeParams','donorFactory', function($scope, $routeParams, donorFactory){
    
    
    
   // var donorIDController = 
        
        
        
        var donorID = $routeParams.donorID;
        $scope.donor = null;
        
        function init(){
          
              donorFactory.getDonor(donorID)
        .success(function(donor){
            $scope.donor = donor;
            
        })
        .error(function(data, status, header, config) {
            // handle error
            
        });
          
        };
        
        
        
        init();
        
    }
    
  
                                 ]);
    
}());