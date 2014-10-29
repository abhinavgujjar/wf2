
//declared!! []
angular.module('travelocity', []);

angular.module('travelocity').filter('toFeet', function(){
	return function(input){
		return input * 0.092903;
	}
})


angular.module('travelocity').value('descLimit', 300);

angular.module('travelocity').value('companyName', 'Wells Fargo 2.0');
