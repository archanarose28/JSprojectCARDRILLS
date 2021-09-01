// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory. 
// Execute a function and return an array that only contains BMW and Audi cars.  
//Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
exports.bmwAudiOnly = function (inventoryArr) {
    let BMWAndAudi = [];
    for (let i = 0; i < inventoryArr.length; i++) {
        if ((inventoryArr[i].car_make == "Audi") || (inventoryArr[i].car_make == "BMW")) {
            BMWAndAudi.push(inventoryArr[i].car_make);
        }
    }
    return BMWAndAudi;
}