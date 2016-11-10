var mysql = require('mysql');
var conn = mysql.createConnection({
  host    : 'localhost',
 user     : 'root',
 password : 'Amani39bangani',
 database : 'nelisa'

});
var sql = "INSERT INTO users (username,password) VALUES ?";

//create a list of lists
var values = [
    ['neli',321],
    ['sinazo',123]

];

// bulk insert categories in to the database
conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
