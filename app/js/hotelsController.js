
angular.module('travelocity').controller('hotelsController', 
	function ($scope, descLimit, dataService) {
	$scope.showHotels = true;

	$scope.descLimit = descLimit;

	$scope.showMore = function(hotel){
		hotel.showMore = true;
	}

	$scope.upvote = function(hotel){
		hotel.rating = hotel.rating || 0;
		
		hotel.rating ++;
	}

	$scope.downvote = function(hotel){
		hotel.rating = hotel.rating || 0;

		hotel.rating --;
	}

	$scope.addHotel = function() {
		

		hotels.push($scope.newHotel);
	}

	var hotels = dataService.getHotels();

	$scope.hotels = hotels;
});