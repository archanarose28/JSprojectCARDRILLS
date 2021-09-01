
// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. 
//Execute a function to find what the make and model of the last car in the inventory is? 
// Log the make and model into the console in the format of: "Last car is a *car make goes here* *car model goes here*"
const inventoryArr = require("../name.js").inventory;
const prob2 =require("../probem2.js");
let computedValue2;
computedValue2=prob2.lastCarDetails(inventoryArr);
//var entry=Object.entries(computedValue2);
//console.log("Last car is a " , entry[1][1] ,"" , entry[2][1]);
console.log("Last car is a " , computedValue2[1] ,"", computedValue2[2]);



