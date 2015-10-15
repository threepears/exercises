/*
  ...........YOUR MISSION...........

  Write a program that will convert a dollar amount to the
  number of coins that make up the amount. Use the common
  American coins of quarters, dimes, nickels, and pennies.

  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (amount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  var newAmount = Math.round(amount * 100);

  var quarter = 25;
  var dime = 10;
  var nickel = 5;
  var penny = 1;

  coinPurse.quarters = Math.floor(newAmount / quarter);
  var quarterRemainder = newAmount - (coinPurse.quarters * quarter);

  coinPurse.dimes = Math.floor(quarterRemainder / dime);
  var dimeRemainder = quarterRemainder - (coinPurse.dimes * dime);
  if (coinPurse.dimes < 1) {
    coinPurse.dimes = 0;
    dimeRemainder = quarterRemainder;
  }

  coinPurse.nickels = Math.floor(dimeRemainder / nickel);
  var nickelRemainder = dimeRemainder - (coinPurse.nickels * nickel);
  if (coinPurse.nickels < 1) {
    coinPurse.nickels = 0;
    nickelRemainder = dimeRemainder;
  }

  coinPurse.pennies = Math.floor(nickelRemainder / penny);
  var pennyRemainder = nickelRemainder - (coinPurse.pennies * penny);
  if (coinPurse.pennies < 1) {
    coinPurse.pennies = 0;
  }

  return coinPurse;
}

var amount = 5.41;
var coins = coinCounter(amount)
console.log(coins);







