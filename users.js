var mysql = require('mysql');
var conn = mysql.createConnection({
  host    : 'localhost',
 user     : 'root',
 password : 'Amani39bangani',
 database : 'nelisa'

});
var sql = "INSERT INTO users (username,email,password) VALUES ?";

//create a list of lists
var values = [
    ['nelisa',"neli@mail.com",321],
    ['sinazo',"sinazo@projectcodex.com",123]

];

// bulk insert categories in to the database
conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
