var Sandwich = (function (oldSandwich) {
	
	// List available condiments
	var condiments = {
		mustard: .25,
		mayonnaise: .25,
		ketchup: .25,
		teriyaki: .50,
		nocondiments: 0
	}

	// Take price so far and desired condiments, add to sandwich, return new price
	oldSandwich.addCondiments = function (sandwichSoFar, condiment) {

		var listofCondiments = [];
        $.each(condiment, function(){            
          	listofCondiments.push($(this).val());
        });

		for (var i = 0; i < listofCondiments.length; i++) {
			sandwichSoFar += condiments[listofCondiments[i]];
		}

		return sandwichSoFar;
	}

	return oldSandwich;

})(Sandwich || {});