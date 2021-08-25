// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot.
// Execute a function that will return an array from the dealer data containing only
// the car years and log the result in the console as it was returned.

exports.carYearsonly = function (inventoryArr) {
  var res4 = [];

  for (i = 0; i < inventoryArr.length; i++) {
    var t = inventoryArr[i].car_year;
    res4.push(t);
  }
  return res4;
};
