var fs = require('fs');

exports.findingProfit = function(purchases,salesWeek) {
    var profitability = {};
    for (var sales in salesWeek) {
     var capital = purchases[sales];
     var cost = salesWeek[sales];
     if(!profitability.hasOwnProperty(sales)){
       profitability[sales] = 0;
     }
     profitability[sales] = cost - capital;
}
// console.log(profitability);
return profitability;
}
