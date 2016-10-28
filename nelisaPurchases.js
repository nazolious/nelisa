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
exports.splittingPurchases = function(newPurchase) {
    var array1 = [];
    var array2 = [];
    var array3 = [];
    var array4 = [];
    var weekly0 = new Date('31-Jan');
    var weekly1 = new Date('7-Feb');
    var weekly2 = new Date('14-Feb');
    var weekly3 = new Date('21-Feb');
    var weekly4 = new Date('1-Mar');

    newPurchase.forEach(function(bought) {
        if (new Date(bought.dates) < weekly1 && new Date(bought.dates) > weekly0) {
            array1.push(bought);
              // console.log(array1);
        }
        if (new Date(bought.dates) < weekly2 && new Date(bought.dates) >= weekly1) {
            array2.push(bought);
        }
        if (new Date(bought.dates) < weekly3 && new Date(bought.dates) >= weekly2) {
            array3.push(bought);
        }
        if (new Date(bought.dates) >= weekly3) {
            array4.push(bought);
        }
    });
    var purchasesMap = {
            week1: array1,
            week2: array2,
            week3: array3,
            week4: array4
        }
        // console.log(purchasesMap);
    return purchasesMap;
};
exports.groupPurchasing = function(purchasesMap, week) {

    var weekPurchases = {};
<<<<<<< HEAD
    array1.forEach(function(gain) {
            var items = gain.items;
            var Cost = gain.Cost;
            if (!weekPurchases.hasOwnProperty(items)) {
                weekPurchases[items] = Cost;
            }
        })
        console.log(weekPurchases);
=======
    purchasesMap[week].forEach(function(gain) {
      // console.log();
        var Items = gain.Items;
        var Cost = gain.Cost;
        if (!weekPurchases.hasOwnProperty(Items)) {
            weekPurchases[Items] = Cost;
        }
    })
    // console.log(weekPurchases);
>>>>>>> 4a181d5ddd635b3f2c945798348a48cc60229b94
    return weekPurchases;
}
exports.qtySoldCost = function(weekPurchases, productTotal) {
    // group data for week//
    var quantitySold = {};
<<<<<<< HEAD
    productTotal.forEach(function(fruittee) {
            var items = fruittee.item;
            var quantity = fruittee.quantity;
            if (!quantitySold.hasOwnProperty(items)) {
                quantitySold[items] = 0;
            }
            quantitySold[items] += Number(quantity);
        })
        //         //  take my purchases[profit]* sales[quantitySold]
=======
    for (var key in productTotal) {
      var Items = productTotal[key].item;
      var quantity = productTotal[key].quantity;
      // console.log(quantity);
      // console.log(Items);
      if (!quantitySold.hasOwnProperty(Items)) {
        quantitySold[Items] = 0;
      }
      quantitySold[Items] += Number(quantity);
        }
// console.log(quantitySold);
             //  take my purchases[profit]* [quantitySold]
>>>>>>> 4a181d5ddd635b3f2c945798348a48cc60229b94
    var costQuantity = {};
    for (var Cost in weekPurchases) {
        var qty = quantitySold[Cost];
        var items = weekPurchases[Cost] * qty;
        if (!costQuantity.hasOwnProperty(Cost)) {
            costQuantity[Cost] = 0;
        }
        costQuantity[Cost] += Number(items);
    }
    // console.log(costQuantity);
    return costQuantity;
};
exports.nelisaSold = function(productList) {
    var totalWeekly = {};
    productList.forEach(function(list) {
        var item = list.item;
        var quantity = list.quantity;
        var salesPrice = list.salesPrice * list.quantity;
        if (totalWeekly[item] === undefined) {
            totalWeekly[item] = 0;
        };
        totalWeekly[item] = totalWeekly[item] + Number(salesPrice);
    });
    //  console.log(totalWeekly);
    return totalWeekly;
};
