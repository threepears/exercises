function tree(number) {
	
	var count = 1;
	var spaceCount = number - 1;
	var christmas = document.getElementById("pinetree");

	//Number of rows
	for (var i = 0; i < number; i++) {
		//Set row variable
		var row = "";

		//Print each row's spaces
		for (var k = 0; k < spaceCount; k++) {
			var row = row + (" ");
		}

		//Print each row's stars
		for (var j = 0; j < count; j++) {
			var row = row + ("*");
		}

		count = count + 2;
		spaceCount = spaceCount - 1;
		console.log(row);
		christmas.innerHTML = christmas.innerHTML + row + "<br/>";
	}
}

tree(6);