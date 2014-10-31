
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
		templateUrl : 'partials/listing.html',
		controller : 'hotelsController'
	});


	$routeProvider.when('/listingtable', {
		templateUrl : 'partials/listingtable.html',
		controller : 'hotelsController'
	});

	$routeProvider.when('/details/:hotelId', {
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


angular.module('travelocity').filter('paginate', function(){
	return function(hotels, page){
		var output = hotels.slice(page, page + 5);

		return output;
	}
})


angular.module('travelocity').value('descLimit', 300);

angular.module('travelocity').value('companyName', 'Wells Fargo 2.0');
