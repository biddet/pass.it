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

	$scope.people = [{
		name: 'John Doe',
		address: '555 Main St.', 
		state: 'NY'
	},
	{
		name: 'Jane Doe',
		address: '333 Boardwalk Blvd.',
		state: 'CA'
	},
	{
		name: 'Bob Doe',
		address: '123 Main St.',
		state: 'TX'
	}];

	$scope.formattedAddress = function(person) {
		return person.address + ', ' + person.state;
	};

    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {

    
}]);

myApp.directive("searchResult", function() {
	return {
		templateUrl: 'directives/searchresult.html',
		replace: true,
		scope: {
			//local text binding, @ = text, = = object, & = function
			personObject: "=",
			formattedAddressFunction: "&"
		},
		compile: function(elem, attrs) {

			console.log('Compiling...');
			//elem.removeAttr('class');
			console.log(elem);

			return {
				post: function(scope, elements, attrs) {
					console.log('Post-linking...');
					console.log(scope);
					//if (scope.personObject.name == 'Jane Doe'){
					//	elements.removeAttr('class');
					//}
					console.log(elements);
				}
			}

		}
	}
});