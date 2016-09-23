var mysql = require('mysql');
var fs = require('fs');
var conn = mysql.createConnection({
  host    : 'localhost',
 user     : 'root',
 password : 'Amani39bangani',
 database : 'nelisa'

});

var categoryIdMap = [];

conn.query('select * from categories', function(err, results) {
if (err) throw err;

    var myCategories = [
        {product : 'Milk 1l', category : 'Dairy'},
        {product : 'Imasi', category :'Dairy'},
        {product : 'Bread', category :'Grains'},
        {product : 'Chakalaka Can', category :'Canned'},
        {product : 'Gold Dish Vegetable Curry Can', category : 'canned'},
        {product : 'Fanta 500ml', category : 'Drinks'},
        {product : 'Coke 500ml', category : 'Drinks'},
        {product : 'Cream Soda 500ml', category : 'Drinks'},
        {product : 'Iwisa Pap 5kg', category : 'Grains'},
        {product : 'Top Class Soy Mince', category : 'Grains'},
        {product : 'Shampoo 1 litre', category : 'Personal Care'},
        {product : 'Soap Bar', category : 'Personal Care'},
        {product : 'Bananas - loose', category : 'Fruit'},
        {product : 'Apples - loose', category : 'Fruit'},
        {product : 'Mixed Sweets 5s', category : 'Sugar-Candy'},
        {product : 'Heart Chocolates', category : 'Sugar-Candy'},
        {product : 'Rose (plastic)', category : 'Gifts and Cards'},
        {product : 'Valentine Cards', category : 'Gifts and Cards'}
    ];
    // build categoryIdMap

    results.forEach(function(item){
      var result = {
        category: item.category,
        category_id: item.id
      }
      categoryIdMap.push(result);
    })

    // console.log(" From DTBS -------");
    // console.log(categoryIdMap);
    //
    // console.log(" From FILES -------");
    // console.log(myCategories);

    var myValues = [];
    categoryIdMap.forEach(function(item1){
      myCategories.forEach(function(item2){
        if (item1.category === item2.category) {
          // console.log(item2.product);
          var result = {
            product: item2.product,
            category_id: item1.category_id
          }
          myValues.push(result);
        }
      })
    })
console.log(myValues);

var values = [];
myValues.forEach(function(item){
  var result = [
    item.product,
    item.category_id
  ]
  values.push(result);
})
conn.query( "INSERT INTO products (product, category_id) VALUES ?", [values], function(err) {
    if (err) throw err;
});
conn.end();
});
