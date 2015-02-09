(function (){

    
    var donorsController = function($scope){
         $scope.donor = "kieth tha man";
        
    }
    
    
    
angular.module('donorInterfaceapp')
.controller('donorIDController', ['$scope', donorsController]);


}());