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
// console.log(productIdMap);
// loop through all the products read from CSV file

var readingFiles = fs.readFileSync('./data/week2.csv', 'utf-8').split('\n').splice(1).filter(Boolean);
var input = [];
// console.log(readingFiles);
var product = readingFiles.forEach(function(item) {
    var salesData = item.split(',');
    var dates = salesData[1];
    var product = salesData[2];
    var quantity = salesData[3];
    var salesPrice = salesData[4];
    var result = {
        date: dates,
        product: product,
        QTY: quantity,
        salesPrice: salesPrice
    };
    input.push(result);
});
// console.log(input);

var productValues = [];
productIdMap.forEach(function(bulk1){
  input.forEach(function(bulk2){
    if (bulk1.product === bulk2.product) {
      var result = {
        date: bulk2.date,
        QTY: bulk2.QTY,
        salesPrice: bulk2.salesPrice,
        product_id: bulk1.product_id
      }
        productValues.push(result);
    }
      // console.log(item2.product);
  })
})
// console.log(productValues);
var values = [];
productValues.forEach(function(item){
  var result = [
    item.date,
    item.QTY,
    item.salesPrice,
    item.product_id
  ]
  values.push(result);
})
console.log(values);
conn.query( "INSERT INTO sales (dates,qty,salesPrice,product_id) VALUES ?", [values], function(err) {
    if (err) throw err;

});
conn.end();

});
