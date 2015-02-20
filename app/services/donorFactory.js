(function(){
    
    //dummy test factory
    
angular.module('donorInterfaceapp')
.factory('donorFactory', [function(){
    
    //var donorFactory = 
     //only for local data testing, activate if server is disconnected   
    /*   var donors = [
            
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
        
        ]; */
        
        var factory = {};
    //server
      factory.getDonors = function(){
            return $http.get('/customers');
            
        };
    
    factory.getDonor = function(donorID){
        return $http.get('/customers/' + donorID);
    };
    
    
    
    
    
    
    
    
    
    
   // localStorage
    /*    factory.getDonors = function(donorID){
            return donors;
            
        };
        factory.getDonor = function(){
            
            
          //search the donors for the donorID locally
            
            for (var i =0, len=donors.length;i<len;i++){
            if (donors[i].id === parseInt(donorID)){
                return donors[i];
                }   
            }
            return {};
        }  */
        
        return factory;
        
    }
                         ]);
    

    
}());