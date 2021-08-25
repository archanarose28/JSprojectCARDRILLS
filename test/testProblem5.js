// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000.
// Using the array you just obtained from the previous problem, find out how many cars were made
// before the year 2000 and return the array of older cars and log its length.



const inventoryArr = require("../name.js").inventory;
const prob5 =require("../probem5.js");


var computedValue5=[];
computedValue5=prob5.carYeargreater2000(inventoryArr);
var entry=Object.entries(computedValue5);

for(i=0;i<entry.length;i++)
{
console.log(entry[i][1]);
}

console.log("number of years older than 2000 is " +  entry.length)
