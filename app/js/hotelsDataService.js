angular.module('travelocity').factory('dataService',

	function($http) {

		//http://plnkr.co/edit/FM5dlQ?p=preview

		var dataService = {
			getHotels: function(callback) {
				var httpPromise = $http({
					method: 'GET',
					url: 'data/hotels.json'
				});

				var hotels;

				httpPromise.success(
					function(data, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available

					callback(data);
				});

				return hotels;
			},
			addHotel: function(hotel) {
				hotels.push(hotel);
			}

		}

		return dataService;
	}


)