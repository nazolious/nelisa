var fs = require('fs');

exports.sales = function(filePath){
  var filesInFolder = fs.readFileSync(filePath, 'utf-8');
  var lines = filesInFolder.replace(/R/g,'')
  .split('\n').slice(1).filter(Boolean);

var newPurchase = [];
var product = lines.forEach(function(line){
  var goods = line.split(';');
  newPurchase.push(goods);
});
var purchaseList = newPurchase.map(function(list){
  return {
    item: list[2],
    totalCost: Number(list[5])
  };
});
console.log(purchaseList);
  // return purchaseList;
}
exports.groupPurchasing = function(purchaseList){
  var purchaseTotal = {};
  purchaseList.forEach(function(lists){
    var item = lists.item;
    var totalCost = lists.totalCost;
    if(purchaseTotal[item] === undefined){
      purchaseTotal[item] = 0;
    };
    purchaseTotal[item]+= Number(totalCost);
  });
  // console.log(purchaseTotal);
  // return purchaseTotal;
}
