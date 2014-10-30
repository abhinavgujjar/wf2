angular.module('travelocity').controller('hotelsController',
	function($scope, descLimit, dataService, votingService, $http) {
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


		// var hotels = $resource('data/hotels.json', {userId:'@id'});

		// $http.get('data/hotels.json').success(function(data) {
		// 	$scope.hotels = data;
		// });



		dataService.getHotels().then(function assignHotels(data) {
			$scope.hotels = data;
		});


	});