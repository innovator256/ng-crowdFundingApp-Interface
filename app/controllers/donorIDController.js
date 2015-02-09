(function (){

    
    var donorIDController = function($scope, $routeParams){
        
        var donorID = $routeParams.donorID;
        
        function init(){
            
            //search the donors for the donorID
            
            for (var i =0, len=$scope.donors.length;i<len;i++){
            if ($scope.donors[i].id === parseInt(donorID)){
                $scope.detail = $scope.donors[i].detail;
                break;
                
                }
            
            }
            
        }
        
        
        
        init();
        
    }
    
    
    
angular.module('donorInterfaceapp')
.controller('donorIDController', ['$scope','$routeParams', donorIDController]);


}());