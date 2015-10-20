/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  1. In the HTML, have one input field where someone can enter
      in a temperature.
  2. Create a radio button group where Celsius or Fahrenheit 
      can be selected as the scale that the number should be 
      converted to.
  3. Create a block level element that will hold the text of the
      converted temperature.
  4. Create a button that, when clicked, displays the converted.
  5. Create another button that, when clicked, clears any text
      in the input field.
  6. Add an event handler to the input field that checks if the 
      user pressed the enter key, and if that happens, perform
      the conversion.
  7. If the temperature is greater than 90F/32C the color of 
      the converted temperature should be red.
  8. If the temperature is less than 32F/0C the color of 
      the converted temperature should be blue.
  9. For any other temperature, the color should be green.
*/

function toCelsius (temp) {
  var result = ((temp - 32) * 5) / 9;
  return result;
}

function toFahrenheit (temp) {
  var result = ((temp * 9) / 5) + 32;
  return result;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var buttonclear = document.getElementById("clear");

var finalTemp = document.getElementById("result");

var temp = document.getElementById("inputtemp");

var cel = document.getElementById("celsius");
var fahr = document.getElementById("fahrenheit");


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  clickEvent.preventDefault();
  console.log("event", clickEvent);

  var temp = document.getElementById("inputtemp").value;

  if (temp === "") {
    button.value = "PLEASE ENTER A TEMPERATURE";
    return false;
  }

  if (cel.checked === false && fahr.checked === false) {
    button.value = "PLEASE CHOOSE A UNIT";
    return false;
  }

  if (cel.checked) {
    var resultCelsius = toCelsius(temp);

    finalTemp.innerHTML = Math.round(resultCelsius);

    if (resultCelsius > 32) {
      finalTemp.classList.add("hot");
    } else if (resultCelsius < 0) {
      finalTemp.classList.add("cold");
    } else {
      finalTemp.classList.add("normal");
    }
  } else {
    var resultFahrenheit = toFahrenheit(temp);

    finalTemp.innerHTML = Math.round(resultFahrenheit);

    if (resultFahrenheit > 90) {
      finalTemp.classList.add("hot");
    } else if (resultFahrenheit < 32) {
      finalTemp.classList.add("cold");
    } else {
      finalTemp.classList.add("normal");
    }
  }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

temp.addEventListener("keyup", function() {
  button.value = "CONVERT!";
});

cel.addEventListener("click", function() {
  button.value = "CONVERT!";
});

fahr.addEventListener("click", function() {
  button.value = "CONVERT!";
});

buttonclear.addEventListener("click", function() {
  temp.value = " ";
  finalTemp.innerHTML = " ";
  finalTemp.classList.remove("hot");
  finalTemp.classList.remove("cold");
  finalTemp.classList.remove("normal");
  cel.checked = false;
  fahr.checked = false;
});





