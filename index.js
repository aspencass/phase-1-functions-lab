// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42;
    if (someValue >= hqLocation) {
        return someValue - hqLocation
    } else if (someValue < hqLocation) { 
        return hqLocation - someValue
    } else {
        return `(${pickupLocation} + ${hqLocation}) - ${hqLocation}`
    }
    }
distanceFromHqInBlocks(someValue);

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    let dFeet = distanceTravelledInFeet(start, destination)
    if (dFeet <= 400) {
        return 0
    } else if (dFeet > 400 && dFeet <= 2000) {
        return (dFeet - 400) * 0.02
    } else if (dFeet > 2000 && dFeet < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}


/*

Given the same starting and ending block as the previous test 
(hint hint), return the fare for the customer. The first four 
hundred feet are free. For a distance between 400 and 2000 feet, 
the price is 2 cents per foot (not including 400, which are free!).
 Then Scuber charges a flat fare for a distance over 2000 feet and 
 under 2500 feet. Finally, Scuber does not allow any rides over 2500
  feet — the function returns 'cannot travel that far' if a ride over
   2500 feet is requested.

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
  }

*/



