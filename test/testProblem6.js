// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory. 
// Execute a function and return an array that only contains BMW and Audi cars.  
//Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
const inventoryArr = require("../name.js").inventory;
const prob6 = require("../probem6.js");
let computedValue6;
computedValue6 = prob6.bmwAudiOnly(inventoryArr);
/*let entry = Object.entries(computedValue6);
for (i = 0; i < entry.length; i++) {
    console.log(entry[i][1]);
}
console.log(JSON.stringify(entry));*/
for(let i = 0; i < computedValue6.length; i++) {
    console.log(computedValue6[i]);
}
console.log(JSON.stringify(computedValue6));
