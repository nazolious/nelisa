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
            items: items,
            Cost: Cost
        };
        newPurchase.push(result);
    });
    // console.log(newPurchase);
    return newPurchase;
};
exports.splittingPurchases = function(newPurchase, weekly1, weekly0) {
    var array1 = [];
    newPurchase.forEach(function(bought) {
        if (new Date(bought.dates) <= weekly1 && new Date(bought.dates) > weekly0) {
            array1.push(bought);
        }
    });
    // console.log(array1);
    return array1;
};
exports.groupPurchasing = function(array1) {
    var weekPurchases = {};
    array1.forEach(function(gain) {
            var items = gain.items;
            var Cost = gain.Cost;
            if (!weekPurchases.hasOwnProperty(items)) {
                weekPurchases[items] = Cost;
            }
        })
        console.log(weekPurchases);
    return weekPurchases;
}
exports.qtySoldCost = function(weekPurchases, productTotal) {
    // group data for week//
    var quantitySold = {};
    productTotal.forEach(function(fruittee) {
            var items = fruittee.item;
            var quantity = fruittee.quantity;
            if (!quantitySold.hasOwnProperty(items)) {
                quantitySold[items] = 0;
            }
            quantitySold[items] += Number(quantity);
        })
        //         //  take my purchases[profit]* sales[quantitySold]
    var costQuantity = {};
    for (var Cost in weekPurchases) {
        var qty = quantitySold[Cost];
        var items = weekPurchases[Cost] * qty;
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
        if (totalWeekly[item] === undefined) {
            totalWeekly[item] = 0;
        }
        totalWeekly[item] += Number(salesPrice);
    });
    //  console.log(totalWeekly);
    return totalWeekly;
}
