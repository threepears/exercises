var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

// Use the forEach method to add the name of each planet to a div element in your HTML

var el = document.getElementById("planets");

planets.forEach(function(planet) {
	el.innerHTML = el.innerHTML + "<div>" + planet + "</div>";
});

// Use the map method to create a new array where the first letter of each planet is capitalized

var caps = planets.map(function(planet) {
	return planet[0].toUpperCase() + planet.slice(1);
});

console.log(caps);

// Use the filter method to create a new array that contains planets with the letter 'e'

var planetswithe = planets.filter(function(planet){
	if (planet.indexOf("e") !== -1) {
		return planet;
	}
});

console.log(planetswithe);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var reducedSentence = words.reduce(function(word1,word2) {
	return word1 + " " + word2;
});

console.log(reducedSentence);


