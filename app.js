var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

//no $
myApp.service('nameService', function() {

	var self = this;
	this.name = 'John Doe';

	this.namelength = function() {
		return self.name.length;
	};

});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {

	$scope.person = {
		name: 'John Doe',
		address: '555 Main St., NY'
	}

    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {

    
}]);

myApp.directive("searchResult", function() {
	return {
		templateUrl: 'directives/searchresult.html',
		replace: true,
		scope: {
			//local text binding, @ = text, = = object
			personObject: "="
		}
	}
});