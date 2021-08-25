
// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot.
// Execute a function that will return an array from the dealer data containing only the car years
// and log the result in the console as it was returned.


const inventoryArr = require("../name.js").inventory;
const prob4 =require("../probem4.js");


var computedValue4=[];
computedValue4=prob4.carYearsonly(inventoryArr);
var entry=Object.entries(computedValue4);

for(i=0;i<entry.length;i++)
{
console.log(entry[i][1]);
}