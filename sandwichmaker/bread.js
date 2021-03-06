var Sandwich = (function (oldSandwich) {
	
	// List available breads
	var breads = {
		white: 1,
		wheat: 1,
		rye: 1.5,
		pumpernickel: 1.5
	}

	// Take price so far and desired type of bread, add to sandwich, return new price
	oldSandwich.addBread = function (sandwichSoFar, bread) {
		sandwichSoFar += breads[bread];
		return sandwichSoFar;
	}

	return oldSandwich;

})(Sandwich || {});