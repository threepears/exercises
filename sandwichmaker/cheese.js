var Sandwich = (function (oldSandwich) {
	
	// List available cheeses
	var cheeses = {
		american: .25,
		swiss: .30,
		cheddar: .25,
		mozzarella: .75,
		nocheese: 0
	}

	// Take price so far and desired type of cheese, add to sandwich, return new price
	oldSandwich.addCheese = function (sandwichSoFar, cheese) {
		sandwichSoFar += cheeses[cheese];
		return sandwichSoFar;
	}

	return oldSandwich;

})(Sandwich || {});