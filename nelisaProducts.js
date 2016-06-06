var fs = require('fs');

exports.linesInFiles = function(filePath) {

    var newArray = [];

    var filesInFolder = fs.readFileSync(filePath, 'utf-8');
    var lines = filesInFolder
        .split("\n")
        .slice(1).filter(Boolean);
    // console.log(lines);
    var product = lines.forEach(function(line) {
        var stock = line.split(',');
        newArray.push(stock);
    });
    // console.log(newArray);

    var productList = newArray.map(function(set) {
        return {
            item: set [2],
            quantity: Number(set[3])
        }
    });
    // console.log(productList);
    return productList;
};
exports.groupingData = function(productList) {
    // console.log(productList);
    var productTotal = {};

    productList.forEach(function(list) {
        // console.log(list);
        var item = list.item;
        var quantity = list.quantity;

        if (productTotal[item] === undefined) {
            productTotal[item] = 0;
        }

        productTotal[item] = productTotal[item] + Number(quantity);
    });
    // console.log(productList[list]);
    // for (var quantity in productList) {
    //   if (productList.hasOwnProperty(quantity)) {
    //
    //   }
    // }
    console.log(productTotal);
    return productTotal;
};
