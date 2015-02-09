(function (){

var app = angular.module('donorInterfaceapp', ['ngRoute']);

app.config(function ($routeProvider){
           $routeProvider
           .when('/details/:donorID', {
               controller: 'donorIDController',
               templateUrl:'views/donorDetails.html'
                })
           .when('/', {
               controller: 'donorsController',
               templateUrl:'views/donors.html'
                })
           .otherwise({redirectTo: '/'});
           
           });

}());