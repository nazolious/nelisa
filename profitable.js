var fs = require('fs');
exports.findingProfit = function(salesWeek,purchases) {
    var profitability = {};

    for(var item in salesWeek) {
      for(var cost in purchases) {
        if (item === cost) {
          profitability[cost] = salesWeek[item] - purchases[cost];
        }
      }
    }

  //if (!profitability.hasOwnProperty(key)) {

  console.log(profitability);
  return profitability
};

exports.mostProfit = function(profitability){
  var max = 0;
  var profit = {};
  for (var key in profitability) {
      if (profitability[key] > max) {
          max = profitability[key];
          profit = {
              Item: key,
              profit: max
          }
      }
    }
      // console.log(profit);
      return profit;
}
