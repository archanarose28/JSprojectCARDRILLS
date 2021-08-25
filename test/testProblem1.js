
// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot.
// Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. 
//Then log the car's year, make, and model in the console log in the format of: 
// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"

const inventoryArr = require("../name.js").inventory;
const prob1 =require("../probem1.js");
var computedValue=[];
computedValue=prob1.carDetails(inventoryArr);
var entry=Object.entries(computedValue);


console.log("problem1");
//console.log("Car 33 is a " , valueFinal[0] , "  " , valueFinal[1] ,"  " , "cmodel");
console.log("Car 33 is a" ,entry[0][1], "" ,entry[1][1],"" ,entry[2][1]);