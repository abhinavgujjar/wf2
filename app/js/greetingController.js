
angular.module('travelocity').controller('greetingController', ['$scope', '$timeout', 'companyName',
	function ($scope, $timeout, companyName) {

	$scope.message = "Good Morning";

	$scope.companyName = companyName;

	$timeout(function() {
		$scope.message = "almost Great Afternoon."
	}, 2000);
}]
)