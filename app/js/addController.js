angular.module('travelocity').controller('addController',
	function($scope, dataService, $location) {

		$scope.someHotel = {

		};

		$scope.addHotel = function() {

			if ($scope.hotelsForm.$invalid) {
				alert('Form not valid');

			} else {
				dataService.addHotel($scope.someHotel);

				$location.url('/listing');
			}
		}


	});