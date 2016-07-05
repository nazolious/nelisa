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
        var Cost = Number(goods[4].replace('R', '').replace(',', '.'));
        var result = {
            Shop: shops,
            dates: dates,
            Items: items,
            Cost: Cost
        };
        newPurchase.push(result);
    });
    // console.log(newPurchase);
    return newPurchase;
};
//
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
            'nelisaWeek1': array1,
            'nelisaWeek2': array3,
            'nelisaWeek3': array2,
            'nelisaWeek4': array4
        }
        // console.log(purchasesMap);
    return purchasesMap;
};

exports.groupPurchasing = function(purchasesMap, week, productTotal) {
    var profit = {};
    purchasesMap[week].forEach(function(gain) {
            var Items = gain.Items;
            var Cost = gain.Cost;
            if (!profit.hasOwnProperty(Items)) {
                profit[Items] = 0;
            }
            profit[Items] += Number(Cost);
        })
        // console.log(profit);
    var quantitySold = {};
    productTotal.forEach(function(fruittee) {
            var Items = fruittee.item;
            // console.log(fruittee.quantity);
            var quantity = fruittee.quantity;
            if (!quantitySold.hasOwnProperty(Items)) {
                quantitySold[Items] = 0;
            }
            quantitySold[Items] += Number(quantity);
        })
        // console.log(quantitySold);
    var costQuantity = {};
    for (var Cost in profit) {
        var qty = quantitySold[Cost];
        var items = profit[Cost]*qty;
        if (!costQuantity.hasOwnProperty(Cost)) {
         costQuantity[Cost] = 0;
        }
        costQuantity[Cost] = Number(items);
      }
// console.log(costQuantity);
return costQuantity;
};
exports.nelisaSold = function(productList) {
    var totalWeekly = {};
    productList.forEach(function(solid) {
        var item = solid.item;
        var quantity = solid.quantity;
        var salesPrice = solid.salesPrice * solid.quantity;
        //  console.log(salesPrice);
        if (totalWeekly[item] === undefined) {
            totalWeekly[item] = 0;
        }
        totalWeekly[item] += Number(salesPrice);
    });
    //  console.log(totalWeekly);
    return totalWeekly;
}
