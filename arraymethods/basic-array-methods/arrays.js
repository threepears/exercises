/*
  ...........YOUR MISSION...........

  Write JavaScript functions that perform the following tasks.

  1. document.write() the characters of any string in reverse order.
  2. document.write() the characters of any string in alphabetical order.
  3. document.write() true, or false, if the passed string is a palidrome.

  Note: document.write() is a fast way to put content into the DOM 
  without the need for a getElementById() and innerHTML.
*/

function reversal(origString) {
	document.write(origString.split("").reverse().join("") + "<br/>");
}

function alphabits(origString) {
	document.write(origString.split("").sort().join("") + "<br/>");
}

function palindrome(origString) {
	var original = origString.replace(/[\s,]/g, "").toLowerCase();
	var backwards = original.split("").reverse().join("");
	console.log(backwards);
	console.log(original);
	if (backwards === origString) {
		document.write("true");
	} else {
		document.write("false");
	}
}



var testString = "The quick brown fox jumps over the lazy NSS student";
reversal(testString);
alphabits(testString);
palindrome(testString);