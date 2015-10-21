/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/


/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */
var Make = function() {
  this.makeName = "Honda";
};


/*
Create a function, Model, to hold the 
corresponding property and value
*/
var Model = function() {
  this.modelName = "CR-V";
}


// What is the prototype of a Model?
Model.prototype = new Make();

// Define a Car
var Car = function(color) {
  this.color = color;
};

// What is the prototype of a Car?
Car.prototype = new Model();

// Create the first car
var car1 = new Car("blue");
console.log(car1);

// Create the second car
var car2 = new Car("silver");
console.log(car2);

// Create the third car
var car3 = new Car("green");
console.log(car3);



