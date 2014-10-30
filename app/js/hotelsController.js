
angular.module('travelocity').controller('hotelsController', 
	function ($scope, descLimit, dataService, votingService) {
	$scope.showHotels = true;

	$scope.descLimit = descLimit;

	$scope.showMore = function(hotel){
		hotel.showMore = true;
	}

	$scope.upvote = function(hotel){
		votingService.upVote(hotel);
	}

	$scope.downvote = function(hotel){
		votingService.downVote(hotel);
	}

	function assignHotels(data){
		$scope.hotels = data;	
	}
	
	dataService.getHotels(assignHotels);

	
});