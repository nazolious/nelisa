var fs = require('fs');
exports.findingProfit = function(salesWeek,purchases) {
    var profitability = {};
<<<<<<< HEAD

    for(var item in salesWeek) {
      for(var cost in purchases) {
        if (item === cost) {
          profitability[cost] = salesWeek[item] - purchases[cost];
        }
      }
    }

  //if (!profitability.hasOwnProperty(key)) {

  console.log(profitability);
=======
    for (var key in salesWeek) {
      var capital = salesWeek[key];
      var cost = purchases[key];
  if (!profitability.hasOwnProperty(key)) {

    var purchaseAmount = purchases[key];
    if (!purchaseAmount){
      purchaseAmount = 0;
    }

    var salesAmount = salesWeek[key];
    if(!salesAmount){
      salesAmount = 0;
    }
    profitability[key] = (salesAmount - purchaseAmount);

  }
  }
  // console.log(profitability);
>>>>>>> 4a181d5ddd635b3f2c945798348a48cc60229b94
  return profitability
};

exports.mostProfit = function(profitability){
  var max = 0;
  var profit = {};
  for (var key in profitability) {
      if (profitability[key] > max) {
          max = profitability[key];
          profit = {
            description: 'Most Profit Product',
              Item: key,
              profit: max
          }
      }
    }
      // console.log(profit);
      return profit;
}
