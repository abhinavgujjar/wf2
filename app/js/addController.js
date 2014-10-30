angular.module('travelocity').controller('addController',
	function($scope, dataService, $location, $http) {


		
		$scope.someHotel = {
			amenities: []
		};

		$scope.setStep = function(stepNumber) {
			$scope.step = stepNumber;
		}

		$scope.$watch('selectedCity', function(newValue, oldValue){

			$http.get('data/' + newValue + '.json').success(function(data){
				$scope.locations = data;	
			})

		})

		$scope.addAmenity = function(amenity) {
			$scope.someHotel.amenities.push({
				name: amenity
			});

			$scope.newAmenity = '';
		}

		$scope.locations = [];

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