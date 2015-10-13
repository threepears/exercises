var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

//Set arrays for each grade range
var f = [];
var d = [];
var c = [];
var b = [];
var a = [];

//Set variable placeholders for lowest and highest scores
var lowest = 100;
var highest = 0;

//Loop through scores array
for (var i = 0; i < scores.length; i++) {
	score = scores[i];

	//If current score is less than lowest, change lowest to that score
	if (score < lowest) {
		lowest = score;
	}

	//If current score is more than highest, change highest to that score
	if (score > highest) {
		highest = score;
	}

	//Check each score to see which grade range it belongs to; push to that array
	switch (true) {
		case (score < 61):
			f.push(score);
			break;
		case (score < 71):
			d.push(score);
			break;
		case (score < 81):
			c.push(score);
			break;
		case (score < 91):
			b.push(score);
			break;
		default:
			a.push(score);
			break;
	}
}

//Print how many of each grade range to console
console.log("The number of F grades is", f.length);

//Print how many of each grade range to console
console.log("The number of D grades is", d.length);

//Print how many of each grade range to console
console.log("The number of C grades is", c.length);

//Print how many of each grade range to console
console.log("The number of B grades is", b.length);

//Print how many of each grade range to console
console.log("The number of A grades is", a.length);

//Print lowest score to console
console.log("The lowest score is", lowest);

//Print highest score to console
console.log("The highest score is", highest);






