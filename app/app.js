
//declared!! []
angular.module('travelocity', []);

angular.module('travelocity').filter('toFeet', function(){
	return function(input){
		return input * 0.092903;
	}
})

