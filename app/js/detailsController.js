angular.module('travelocity').controller('detailsController',
	function($scope, descLimit, dataService, votingService, $routeParams) {

		var hotelId = $routeParams.hotelId;
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

		//$scope.hotel = dataService.selectedHotel;
	

		var httpPromise = dataService.getHotel(hotelId);

		httpPromise.success(function(data){
			$scope.hotel = data;
		})
		// dataService.getHotels().then(function assignHotels(data) {
		// 	$scope.hotels = data;
		// });


	});