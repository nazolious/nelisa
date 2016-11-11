var user1 = [];
var inputUser = {
name : req.body.username,
password : req.body.password,
is_admin : roles[req.body.username] === "admin"
}
user1.push(inputUser);
console.log(user1);

req.getConnection(function(err, connection) {
  if (err) return next(err);
  connection.query('SELECT * from users', [], function(err, results) {
      if (err) return next(err);
console.log(results);

user1.forEach(function(inputUser){
results.forEach(function(dbUser){
if(inputUser.name === dbUser.username && inputUser.password === dbUser.password){
  res.redirect('/home');
}
if(inputUser.name === dbUser.username && inputUser.password != dbUser.password){
  res.redirect('/login');

}
if(inputUser.name != dbUser.username){
  res.redirect('/login');

}
})
})

});
});
