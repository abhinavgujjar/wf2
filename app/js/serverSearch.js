angular.module('travelocity').directive('serverSearch', function(baseUrl) {
	return {
		restrict: 'E',
		templateUrl: 'partials/serverSearch.html',
		scope: {
			target: '@target',
			col: '@col'
		},
		controller: function($scope, $http) {
			$scope.$watch('searchTerm', function(newValue, oldValue) {

				var col = $scope.col;

				var obj = {}
				obj[col] = newValue;
				$http.get(baseUrl + $scope.target, {
					headers: {
						'X-Parse-Application-Id': 'tMe8XtUeuW8mqCEO5ah01hxQBLvNQVKdFiLAaCI8',
						'X-Parse-REST-API-Key': 'W90z7anSKkX7PbHfviOfDcT3BZr6E2BHVY3ehN9l',
					},
					params: {
						where: {
							name: newValue
						}
					}
				}).success(function(data) {
					$scope.results = data.results;
				})

			})
		}
	}
});