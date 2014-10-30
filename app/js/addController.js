angular.module('travelocity').controller('addController',
	function($scope, dataService, $location) {


		$scope.someHotel = {
			amenities : []
		};

		$scope.setStep = function(stepNumber)
		{
			$scope.step = stepNumber; 
		}

		$scope.addAmenity = function(amenity){
			$scope.someHotel.amenities.push({ name: amenity});

			$scope.newAmenity = '';
		}

		$scope.step = 1;

		$scope.addHotel = function() {

			if ($scope.hotelsForm.$invalid) {
				alert('Form not valid');

			} else {
				dataService.addHotel($scope.someHotel);

				$location.url('/listing');
			}
		}


	});