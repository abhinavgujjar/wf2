	function greetingController($scope, $timeout){


		$scope.message = "Good Morning";

		$scope.companyName = "Wells Fargo";

		$timeout(function(){
			$scope.message = "almost Great Afternoon."
		}, 2000);
	}

	function hotelsController($scope){
		$scope.showHotels = true;

		$scope.addHotel = function(){
			var newHotel = { 
				name: $scope.name, 
				location: $scope.location, 
				price: $scope.price
			};

			hotels.push(newHotel);
		}

		var hotels = [
		{
			name : 'Novotel',
			location : 'Madhapur',
			price : 15000,
			img : 'novotel.jpg'
		},{
			name : 'Swagat',
			location : 'Kondapur',
			price : 9000,
			img : 'swagat.jpg'
		},{
			name : 'Taj Krishna',
			location : 'Banjara Hills',
			price : 14000,
			img : 'Krishna.jpg'
		}];

		$scope.hotels = hotels;
	}
