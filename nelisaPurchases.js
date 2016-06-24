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
        var totalCost = goods[5];
        var result = {
            Shop: shops,
            dates: dates,
            Items: items,
            totalCost: totalCost
        };
        newPurchase.push(result);
    });
    // console.log(newPurchase);
    return newPurchase;
};
exports.purchasesWeeks = function(newPurchase,weekly1,weekly0) {
        var array1 = [];
        newPurchase.forEach(function(Sweets) {
            if (new Date(Sweets.dates) <= weekly1 && new Date(Sweets.dates) > weekly0) {
              // console.log(newPurchase);
                array1.push(Sweets);
            }
        })
        console.log(array1);
            return array1;
    }
