var mysql = require('mysql');
var conn = mysql.createConnection({
  host    : 'localhost',
 user     : 'root',
 password : 'Amani39bangani',
 database : 'nelisa'

});

var sql = "INSERT INTO categories (category) VALUES ?";

//create a list of lists
var values = [
    ['Dairy'],
    ['Grains'],
    ['Canned'],
    ['Drinks'],
    ['Fruit'],
    ['Personal Care'],
    ['Sugar-Candy'],
    ['Gifts and Cards']

];

// bulk insert categories in to the database
conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
