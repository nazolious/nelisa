var mysql = require('mysql');
var conn = mysql.createConnection({
  host    : 'localhost',
 user     : 'root',
 password : 'Amani39bangani',
 database : 'nelisa'

});

var sql = "INSERT INTO products (product) VALUES ?";

//create a list of lists
var values = [
    ['milk'],
    ['bread'],
    // ['Canned'],
    // ['Drinks'],
    // ['Fruit'],
    // ['Personal Care'],
    // ['Sugar-Candy'],
    ['Imasi']

];
conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
