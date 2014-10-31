angular.module('travelocity').controller('hotelsController',
	function($scope, descLimit, dataService, votingService, $http, $location) {
		$scope.showHotels = true;

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

		$scope.selectHotel = function(hotel){
			dataService.selectedHotel = hotel;

			$location.url('/details');
		}


		// var hotels = $resource('data/hotels.json', {userId:'@id'});

		// $http.get('data/hotels.json').success(function(data) {
		// 	$scope.hotels = data;
		// });



		dataService.getHotels().then(function assignHotels(data) {
			$scope.hotels = data;
		});


	});