angular.module('travelocity').controller('addController',
	function($scope, dataService) {


		$scope.addHotel = function() {
			dataService.addHotel($scope.newHotel);
		}


	});