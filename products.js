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

    var myCategories = {
        'Milk 1l': 'Dairy',
        'Imasi': 'Dairy',
        'Bread': 'Grains',
        'Chakalaka Can': 'Canned',
        'Gold Dish Vegetable Curry Can': 'canned',
        'Fanta 500ml': 'Drinks',
        'Coke 500ml': 'Drinks',
        'Cream Soda 500ml': 'Drinks',
        'Iwisa Pap 5kg': 'Grains',
        'Top Class Soy Mince': 'Grains',
        'Shampoo 1 litre': 'Personal Care',
        'Soap Bar': 'Personal Care',
        'Bananas - loose': 'Fruit',
        'Apples - loose': 'Fruit',
        'Mixed Sweets 5s': 'Sugar-Candy',
        'Heart Chocolates': 'Sugar-Candy',
        'Rose (plastic)': 'Gifts and Cards',
        'Valentine Cards': 'Gifts and Cards'
    };
    // build categoryIdMap
    results.forEach(function(item){
      var result = {
        category: item.category,
        category_id: item.id
      }
      categoryIdMap.push(result);
    })

      // console.log(categoryIdMap);

    // create a new 'list for products' to insert into the database;

    //loop through all the products read from CSV file
  var readingFiles = fs.readFileSync('./data/week2.csv', 'utf-8').split('\n');
  var input = [];
  for (var i = 0; i < readingFiles.length -1; i++) {
    var data = readingFiles[i].split(',');
  //  name = data[2];
    // console.log(readingFiles[i]);

    if(input.indexof(data[2]) === -1){
      input.push(data[2]);
    }

  }
var myValues = [];
  for (var i = 0; i < input.length; i++) {
    for (var category in categoryIdMap) {
    var productName = input[i];
    var categoryName = myCategories[productName];
    var category_id = categoryIdMap[categoryName];
      }
    }
  myValues.push([
    productName,
    category_id
  ])
  console.log(myValues);
  }

      // what is my productName

      // get the category name for my productName

      // get the database category id from the categoryIdMap

      // insert product name and category_id in 'list for products'

    // now bulk insert 'list for products' into the database
  conn.end();
});
