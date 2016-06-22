var fs = require('fs');

exports.sales = function(filePath) {
    var filesInFolder = fs.readFileSync(filePath, 'utf-8');
    var lines = filesInFolder
        .split('\n').slice(1).filter(Boolean);

    var newPurchase = [];
    var product = lines.forEach(function(line) {
        var goods = line.split(';');
        newPurchase.push(goods);
    });
    return newPurchase;
};
exports.purchasesWeeks = function(newPurchase, weekly) {
        var array1 = [];
        // var array2 = [];
        // var array3 = [];
        // var array4 = [];
        newPurchase.forEach(function(bought) {
            if (bought.date <= weekly) {
                array1.push({
                    date: bought.date,
                    item: bought.item,
                    totalCost: bought.totalCost
                });
            }
            // if (bought.date <= weekly) {
            // array2.push(purchaselist);
            // }
            // if (bought.date ) {
            //
            // }
        })
        console.log(array1);
    }
    // exports.groupWeeks = function(purchaseList) {
    //var purchaseList = newPurchase.map(function(list) {
    //     return {
    //         date: list[1],
    //         item: list[2]
    //     }
    // });
    // return purchaseList;
    //     purchaseList.forEach(function(bought) {
    //
    //
    //         if (new Date(bought.date) <= week1 && new Date(bought.date) >= week0) {
    //         purchaseDates.push({
    //
    //         };
    //     });
    //     console.log(purchaseDates);
    // }
    // exports.groupPurchasing = function(purchaseList) {
    //     var purchaseTotal = {};
    //     purchaseList.forEach(function(lists) {
    //         var date = lists.date;
    //         var item = lists.item;
    //         var totalCost = lists.totalCost;
    //         if (purchaseTotal[item] === undefined) {
    //             purchaseTotal[item] = 0;
    //         };
    //         purchaseTotal[item] += Number(totalCost);
    //     });
    //     // console.log(purchaseTotal);
    //     return purchaseTotal;
    // }
    //
    // exports.mostProfit = function(totalWeekly, purchaseTotal) {
    //     var profit = {};
    //     for (var key in totalWeekly) {
    //         if (totalWeekly.hasOwnProperty(key)){
    //     }
    // }
