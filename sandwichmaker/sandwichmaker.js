/*Your project should have one HTML file that has:

a section of options for each sandwich part
the ability to select multiple, or zero, choices for each section (such as turkey and bacon, or "no meat")
a button with a label of "Make me a sandwich"
an empty DOM element into which the final sandwich order and its cost will be inserted
The ingredient choices should be stored as JS objects that contain the ingredients as keys and their cost as the value. {"turkey": "2.00", "bacon": "1.50"}

Make sure the ingredient objects cannot be accessed by the other modules except through an accessor (getter) method.

Each IIFE should expose, in its public interface, a method named add{ingredient} (e.g. addMeat or addVeggies) that accepts a single argument. That argument's value should be the ingredient(s) selected by the user.

The team should create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.

Don't worry about exposing the prices to the user until you display the final cost. This is just an exercise, not a business model.*/


// Get values of chosen ingredients on button click, pass to Sandwich Builder
$("#maker").click(function() {
	var bread = $("input[name='bread']:checked").val();
	var meat = $("input[name='meat']:checked").val();
	var cheese = $("input[name='cheese']:checked").val();
	var veggie = $("input[name='veggies']:checked");
	var condiment = $("input[name='condiments']:checked");
	var sandwichValue = 0;

	Sandwich.buildSandwich(bread, meat, cheese, veggie, condiment, sandwichValue);
})

// Sandwich Builder function
var Sandwich = (function (oldSandwich) {

	// Build sandwich with ingredients passed in
	oldSandwich.buildSandwich = function (bread, meat, cheese, veggie, condiment, sandwichValue) {

		// Add prices as you got through ingredients
		var finalPrice = this.addBread(sandwichValue, bread);
		finalPrice = this.addMeat(finalPrice, meat);
		finalPrice = this.addCheese(finalPrice, cheese);
		finalPrice = this.addVeggies(finalPrice, veggie);
		finalPrice = this.addCondiments(finalPrice, condiment);

		// Display final result in HTML
		var result = finalPrice.toFixed(2);

		$("#letseat").html("$" + result);
	}

	return oldSandwich;


})(Sandwich || {});



