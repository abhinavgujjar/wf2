angular.module('travelocity').controller('detailsController',
	function($scope, descLimit, dataService, votingService) {

		$scope.descLimit = descLimit;

		$scope.showMore = function(hotel) {
			hotel.showMore = true;
		}

		$scope.upvote = function(hotel) {
			votingService.upVote(hotel);
		}

		$scope.downvote = function(hotel) {
			votingService.downVote(hotel);
		}

		$scope.hotel = dataService.selectedHotel;
	

		// dataService.getHotels().then(function assignHotels(data) {
		// 	$scope.hotels = data;
		// });


	});