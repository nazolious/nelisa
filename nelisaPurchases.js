var fs = require('fs');

exports.sales = function(filePath) {
    var filesInFolder = fs.readFileSync(filePath, 'utf-8');
    var lines = filesInFolder
        .split('\n').slice(1).filter(Boolean);
    var newPurchase = [];
    var product = lines.forEach(function(line) {
        var goods = line.split(';');
        var shops = goods[0];
        var dates = goods[1];
        var items = goods[2];
        var totalCost = goods[4].replace('R', '');
        var result = {
            Shop: shops,
            dates: dates,
            Items: items,
            totalCost: parseFloat(totalCost)
        };
        newPurchase.push(result);
    });
    // console.log(newPurchase);
    return newPurchase;
};

exports.purchasesWeeks = function(newPurchase, weekly1, weekly0) {
    var array1 = [];
    var array2 = [];
    var array3 = [];
    var array4 = [];
    newPurchase.forEach(function(bought) {
            if (new Date(bought.dates) <= weekly1 && new Date(bought.dates) > weekly0) {
                array1.push(bought);
            }
            if (new Date(bought.dates) <= weekly1 && new Date(bought.dates) > weekly0) {
                array2.push(bought);
            }
            if (new Date(bought.dates) <= weekly1 && new Date(bought.dates) > weekly0) {
                array3.push(bought);
            }
            if (new Date(bought.dates) <= weekly1 && new Date(bought.dates) > weekly0) {
                array4.push(bought);
            }
        })
    var purchasesMap = {
        weekly1: array1,
        weekly2: array2,
        weekly3: array3,
        weekly4: array4
    }
    return purchasesMap;
};

exports.groupPurchasing = function(purchasesMap) {
    var profit = {};
    purchasesMap.forEach(function(gain) {
        var Items = gain.Items;
        var totalCost = gain.totalCost;
        if (profit[Items] === undefined) {
            profit[Items] = 0;
        }
        profit[Items] = parseFloat(totalCost);
    })
    // console.log(profit);
    return profit;
};
exports.profitable = function(productList){
   var totalWeekly = {};
   productList.forEach(function(solid){
     var item = solid.item;
     var quantity = solid.quantity;
     var salesPrice = solid.salesPrice * solid.quantity;
     if(totalWeekly[item]=== undefined){
       totalWeekly[item] = 0;
     }
     totalWeekly[item]+= parseFloat(salesPrice) ;
   });
  //  console.log(totalWeekly);
   return totalWeekly;
}
