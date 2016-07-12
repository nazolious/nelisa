var fs = require('fs');
exports.findingProfit = function(salesWeek,purchases) {
    var profitability = {};
    for (var key in salesWeek) {
      var capital = salesWeek[key];
      var cost = purchases[key];
  if (!profitability.hasOwnProperty(key)) {
    profitability[key] = (salesWeek[key] - purchases[key]);
  }
  }
  // console.log(profitability);
  return profitability
}
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
