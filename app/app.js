(function (){

var app = angular.module('donorInterfaceapp', ['ngRoute']);

app.config(function ($routeProvider){
           $routeProvider
           .when('/details/:donorID', {
               controller: 'donorIDController',
               templateUrl:'app/views/donorDetails.html'
                })
           .when('/', {
               controller: 'donorsController',
               templateUrl:'app/views/donors.html'
                })
           .otherwise({redirectTo: '/'});
           
           });

}());