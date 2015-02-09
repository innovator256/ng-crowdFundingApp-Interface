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
        
        $scope.donors = [
            
            {
                id : 1,
                joined: "2000-12-01",
                address: "1e2wfrf044g",
                token: 10000000,
                amount:"20005btc"
            },
            
            {
                id : 2,
                joined: "2002-2-02",
                address: "1d4254frg4",
                token: 100000,
                amount:"50btc"
            },
            
            {
                id : 3,
                joined: "2003-12-09",
                address: "134rr3p1rg0",
                token: 1000000,
                amount:"100btc"
            },
            
            {
                id : 4,
                joined: "2004-1-06",
                address: "134rr3p1rg0",
                token: 1000,
                amount:"10btc"
            }
        
        ];
        
        init();
        
    }
    
    
    
angular.module('donorInterfaceapp')
.controller('donorIDController', ['$scope','$routeParams', donorIDController]);


}());