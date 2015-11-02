var Sandwich = (function (oldSandwich) {
	
	// List available veggies
	var veggies = {
		lettuce: .50,
		pickles: .25,
		blackolives: .25,
		tomatoes: .50, 
		noveggies: 0
	}

	// Take price so far and desired veggies, add to sandwich, return new price
	oldSandwich.addVeggies = function (sandwichSoFar, veggie) {

		var listofVeg = [];
        $.each(veggie, function(){            
          	listofVeg.push($(this).val());
        });

		for (var i = 0; i < listofVeg.length; i++) {
			sandwichSoFar += veggies[listofVeg[i]];
		}

		return sandwichSoFar;
	}

	return oldSandwich;

})(Sandwich || {});