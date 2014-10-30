angular.module('travelocity').controller('amenitiesController',
	function($scope) {


		$scope.addAmenity = function(amenity) {
			$scope.someHotel.amenities.push({
				name: amenity
			});

			$scope.newAmenity = '';
		}
	});