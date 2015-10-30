// IIFE
// Immediately invoked function expression
var solarSystem = (function() {
  var planets = ["Mars", "Earth", "Venus"];
  var visitedPlanets = 0;
  var spaceCraft = [];
  var dwarfPlanets = ["Pluto", "Ceres"];


  return {
    lastDate: new Date(),
    getDwarfPlanets: function() {
      return dwarfPlanets;
    },
    addDwarfPlanet: function(dwarf) {
      if (dwarf !== "Earth") {
        dwarfPlanets.push(dwarf);
      }
    },
    getPlanets: function() {
      return planets;
    },
    setVisitedPlanets: function(value) {
      if (value > 0) {
        visitedPlanets = value;
      }
    },
    getNumber: function() {
      return num;
    },
    setNumber: function(number) {
      num = number;
    },
    getSpaceCraft: function() {
      return spaceCraft;
    },
    setSpaceCraft: function(craft) {
      spaceCraft.push(craft);
    },
    setOtherData: function(other) {
      misc = other;
    }
  };
})();

/* 
  Now, code that uses this module can call methods, and access
  properties that are in the public interface, but cannot change
  any private variables.
*/
/*Sedan.setColor("green"); */ // this works

/*
 This adds the property to the public interface, but the 
 existing, internal type property remains unchanged.
*/
/*Sedan.type = "minivan"; 
console.log(Sedan.getType());*/