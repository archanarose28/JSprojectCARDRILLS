
// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website.
// Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.



exports.sortedCarmodels= function (inventoryArr) 
{
var res3 = [];

//fetching only car models from inventorydata
for(i=0;i<inventoryArr.length;i++)
{
var t=inventoryArr[i].car_model;
res3.push(t);
}

//sorting the car models
res3.sort();
 
return res3;
}

