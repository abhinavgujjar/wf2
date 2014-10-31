
//declared!! []
angular.module('travelocity', ['ngRoute']);

angular.module('travelocity').controller('navController',
	function($scope) {

		$scope.append = "?token=ABC";
	});

angular.module('travelocity').config(function($routeProvider){


	$routeProvider.when('/home', {
		templateUrl : 'partials/home.html'
	});

	$routeProvider.when('/listing', {
		templateUrl : 'partials/listing.html'
	});

	$routeProvider.when('/details', {
		templateUrl : 'partials/details.html',
		controller : 'detailsController'
	});

	$routeProvider.when('/add', {
		templateUrl : 'partials/add.html',
		controller : 'addController'
	});

})

angular.module('travelocity').filter('toFeet', function(){
	return function(input){
		return input * 0.092903;
	}
})


angular.module('travelocity').value('descLimit', 300);

angular.module('travelocity').value('companyName', 'Wells Fargo 2.0');
