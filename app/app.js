

(function() {
	var app = angular.module('travelocity', ['ngRoute', 'ngSanitize']);

	app.controller('navController',
		function($scope) {

			$scope.append = "?token=ABC";
		});

	app.config(function($routeProvider) {


		$routeProvider.when('/home', {
			templateUrl: 'partials/home.html'
		});

		$routeProvider.when('/listing', {
			templateUrl: 'partials/listing.html',
			controller: 'hotelsController'
		});


		$routeProvider.when('/listingtable', {
			templateUrl: 'partials/listingtable.html',
			controller: 'hotelsController'
		});

		$routeProvider.when('/details/:hotelId', {
			templateUrl: 'partials/details.html',
			controller: 'detailsController'
		});

		$routeProvider.when('/add', {
			templateUrl: 'partials/add.html',
			controller: 'addController'
		});

	})

	app.filter('toFeet', function() {
		return function(input) {
			return input * 0.092903;
		}
	})


	app.filter('paginate', function() {
		return function(hotels, page) {
			var output = hotels.slice(page, page + 5);

			return output;
		}
	})


	app.value('descLimit', 300);

		app.value('baseUrl', 'https://api.parse.com/1/classes/');

	app.value('companyName', 'Wells Fargo 2.0');


	app.directive('preview', function() {
		return {
			restrict: 'E', //E : Element, A: Attribute, C: Class , M:comment
			templateUrl: 'partials/preview.html',
			scope: {
				desc: '=',
				rows : '@'
			}
		}
	})

	app.directive('zoom', function() {
		return {
			restrict: 'A',
			link : function(scope, element, attrs, controller){
				element.on('mouseenter', function(e) {
				
					element.css({
						color: "red"
					});
				
			})
			}
		}
	})
})();