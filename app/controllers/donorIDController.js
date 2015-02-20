(function (){  
angular.module('donorInterfaceapp')
.controller('donorIDController', ['$scope','$routeParams', function($scope, $routeParams){
    
    
    
   // var donorIDController = 
        
        
        
        var donorID = $routeParams.donorID;
        
        function init(){
            
            //search the donors for the donorID
            
            for (var i =0, len=$scope.donors.length;i<len;i++){
            if ($scope.donors[i].id === parseInt(donorID)){
                $scope.detail = $scope.donors[i].detail;
                break;
                
                }
            
            }
            
        };
        
        
        
        init();
        
    }
    
  


                                 ]);
}());