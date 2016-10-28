var mysql = require('mysql');
var fs = require('fs');
var conn = mysql.createConnection({
  host    : 'localhost',
 user     : 'root',
 password : 'Amani39bangani',
 database : 'nelisa'

});
var productIdMap = [];
conn.query('select * from products', function(err, results) {
if (err) throw err;
  // console.log(results);
results.forEach(function(item){
  var result = {
    product: item.product,
    product_id: item.id
  }
  productIdMap.push(result);

})
var readingFiles = fs.readFileSync('./data/purchases.csv', 'utf-8').split('\n').splice(1).filter(Boolean);
var inputFromPurchases = [];
// console.log(readingFiles);
var product = readingFiles.forEach(function(item) {
    var purchasesData = item.split(';');
    var date = purchasesData[1];
    var product = purchasesData[2];
    var quantity = purchasesData[3];
    var cost = purchasesData[4];
    var result = {
        date: date,
        product: product,
        QTY: quantity,
        cost: cost
    };
    inputFromPurchases.push(result);
});
// console.log(input);
var purchaseValues = [];
productIdMap.forEach(function(bulk1){
  inputFromPurchases.forEach(function(bulk2){
    if (bulk1.product === bulk2.product) {
      var result = {
        date: bulk2.date,
        QTY: bulk2.QTY,
        cost: bulk2.cost,
        product_id: bulk1.product_id
      }
        purchaseValues.push(result);
    }

  })
})
  // console.log(purchaseValues);
  var values = [];
  purchaseValues.forEach(function(item){
    var result = [
      item.date,
      item.QTY,
      item.cost,
      item.product_id
    ]
    values.push(result);
  })
  console.log(values);
  conn.query( "INSERT INTO purchases (date,qty,cost,product_id) VALUES ?", [values], function(err) {
      if (err) throw err;

  });
  conn.end();
});
