angular.module('travelocity').factory('dataService',

	function($http, $q) {

		//http://plnkr.co/edit/FM5dlQ?p=preview

		var dataService = {
			getHotels: function() {
				var deferred = $q.defer();

				var httpPromise = $http({
					method: 'GET',
					url: 'https://api.parse.com/1/classes/travotels',
					headers: {
						'X-Parse-Application-Id': 'tMe8XtUeuW8mqCEO5ah01hxQBLvNQVKdFiLAaCI8',
						'X-Parse-REST-API-Key': 'W90z7anSKkX7PbHfviOfDcT3BZr6E2BHVY3ehN9l',
					}
				});

				var hotels;

				httpPromise.success(
					function(data, status, headers, config) {
						// this callback will be called asynchronously
						// when the response is available

						deferred.resolve(data.results);
					});

				return deferred.promise;
			},
			addHotel: function(hotel) {

				$http.post('https://api.parse.com/1/classes/travotels', hotel, {
					headers: {
						'X-Parse-Application-Id': 'tMe8XtUeuW8mqCEO5ah01hxQBLvNQVKdFiLAaCI8',
						'X-Parse-REST-API-Key': 'W90z7anSKkX7PbHfviOfDcT3BZr6E2BHVY3ehN9l',
					}
				})

			},
			getHotel: function(id) {
				return $http.get('https://api.parse.com/1/classes/travotels/' + id,  {
					headers: {
						'X-Parse-Application-Id': 'tMe8XtUeuW8mqCEO5ah01hxQBLvNQVKdFiLAaCI8',
						'X-Parse-REST-API-Key': 'W90z7anSKkX7PbHfviOfDcT3BZr6E2BHVY3ehN9l',
					}
				});
			}
		}
		return dataService;
	}
);