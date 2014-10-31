angular.module('travelocity').directive('amenities',
	function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/amenities.html',
			scope: {
				someHotel: '=hotel',
				editable : '='
			},
			controller: function($scope) {
				$scope.addAmenity = function(amenity) {
					$scope.someHotel.amenities.push({
						name: amenity
					});

					$scope.newAmenity = '';

				}
			}
		}
	}
);