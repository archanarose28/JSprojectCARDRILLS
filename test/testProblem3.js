// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website.
// Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
const inventoryArr = require("../name.js").inventory;
const prob3 =require("../probem3.js");
let computedValue3;
computedValue3=prob3.sortedCarmodels(inventoryArr);
/*var entry=Object.entries(computedValue3);
for(i=0;i<entry.length;i++)
{
console.log(entry[i][1]);
}*/
for(i=0;i<computedValue3.length;i++)
{
console.log(computedValue3[i]);
}

