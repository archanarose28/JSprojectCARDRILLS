
// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. 
//Execute a function to find what the make and model of the last car in the inventory is? 
// Log the make and model into the console in the format of: "Last car is a *car make goes here* *car model goes here*"
exports.lastCarDetails = function (inventoryArr) {
    let res2 = [];
    let k = inventoryArr.length - 1;
    let year = inventoryArr[k].car_year;
    res2.push(year);
    let cmake = inventoryArr[k].car_make;
    res2.push(cmake);
    let cmodel = inventoryArr[k].car_model;
    res2.push(cmodel);
    //returning result
    return res2;
}