// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot.
// Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. 
//Then log the car's year, make, and model in the console log in the format of: 
// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"

exports.carDetails = function (inventoryArr) {
    let res1 = [];
    for (let i = 0; i < inventoryArr.length; i++) 
    {
        if (inventoryArr[i].id == 33) 
        {
            let year = inventoryArr[i].car_year;
            res1.push(year);
            let cmake = inventoryArr[i].car_make;
            res1.push(cmake);
            let cmodel = inventoryArr[i].car_model;
            res1.push(cmodel);
        }
    }
   // returning the result array
    return res1;
}
