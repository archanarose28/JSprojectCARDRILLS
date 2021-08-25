// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000.
// Using the array you just obtained from the previous problem, find out how many cars were made
// before the year 2000 and return the array of older cars and log its length.

exports.carYeargreater2000 = function (inventoryArr) {
    var res5 = [];
    var yearofCars;

    for (i = 0; i < inventoryArr.length; i++) {
        yearofCars = inventoryArr[i].car_year;
        if (yearofCars < 2000) {
            res5.push(yearofCars);
        }
    }

    return res5;
}
