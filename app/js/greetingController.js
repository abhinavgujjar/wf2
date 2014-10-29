
angular.module('travelocity').controller('greetingController', ['$scope', '$timeout',
	function ($scope, $timeout) {

	$scope.message = "Good Morning";

	$scope.companyName = "Wells Fargo";

	$timeout(function() {
		$scope.message = "almost Great Afternoon."
	}, 2000);
}]
)