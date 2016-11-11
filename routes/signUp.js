exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var data = {
      name : req.body.username,
      email : req.body.email,
      password : req.body.password

}
console.log(data);
		connection.query('insert into users set ?', data, function(err, results) {
  			if (err) return next(err);
				res.redirect('/users');
		});
	});
};
