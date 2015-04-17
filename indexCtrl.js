var app = angular.module('myApp', []);

var navBar = [
		{id: 1, title: 'Home'},
		{id: 2, title: 'About'}
	];


app.controller('indexCtrl',function($scope, $http){

	$scope.items = navBar;

	$http.get('http://rest-service.guides.spring.io/greeting').
		success(function (data) {
			$scope.greeting = data;			
		}).
		error(function(data){
			$scope.error1 = "No Greeting data";
		})

	$http.get('http://www.json-generator.com/api/json/get/bGPsRmoFIO?indent=2').
		success(function(data1){
			$scope.geonames = data1;
		}).
		error(function(data1){			
			$scope.error2 = "No Data";
		});
	
});
