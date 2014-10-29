
angular.module('travelocity').factory('dataService',

 function(){

 	var hotels = [{
		"id": "1",
		"name": "Taj Eastend",
		"price": 17000,
		"location": "Race Course Road",
		"img": "novotel.jpg",
		"url": "http://www.theleela.com/",
		"availableForBook": false,
		"description": "Incoherently newt hound ",
		"area": 40000
	}, {
		"id": "2",
		"name": "Keys Hotel",
		"price": 8000,
		"location": "Whitefield",
		"img": "swagat.jpg",
		"availableForBook": true,
		"description": "Artful goodness as depending naively suitably disagreeably more krill alongside wherever a far krill fled irrespective the the began thus desolate that more madly that less that off the dauntlessly this avowed far bravely beside where yikes and drew or opossum shut jeepers doused bowed jeepers impious this loaded deftly walked until that and porpoise tortoise while busted tunefully spread dear one unlocked that assisted much excepting cordially that crud.",
		"area": 20000
	}, {
		"id": "3",
		"name": "Leela Palace",
		"price": 20000,
		"location": "Old Airport Road",
		"img": "Krishna.jpg",
		"availableForBook": true,
		"description": "Visually far vivacious one this swore and wow that opposite more and goldfish coward besides much labrador bashfully one well rang after a and darn wow far browbeat playfully excited less more when rash well radically wildebeest one well a hypnotically vehemently stupid so.",
		"area": 65000
	}, {
		"id": "4",
		"name": "Hyatt Regency",
		"price": 45000,
		"location": "Old Airport Road",
		"img": "Krishna.jpg",
		"availableForBook": true,
		"description": "Visually far vivacious one this swore and wow that opposite more and goldfish coward besides much labrador bashfully one well rang after a and darn wow far browbeat playfully excited less more when rash well radically wildebeest one well a hypnotically vehemently stupid so.",
		"area": 65000
	}];

	return {
		getHotels:  function(){
			return hotels;
		}

	}
})