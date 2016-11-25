exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from users', [], function(err, results) {
        if (err) return next(err);
		res.render( 'users', {
				// no_products : results.length === 0,
				users : results,
		});
      });
	});
};
    exports.showAdd = function(req, res){
    	req.getConnection(function(err, connection){
    		if (err) return next(err);
    		connection.query('SELECT * from users', [], function(err, users) {
            	if (err) return next(err);
              var data = {
                username : req.body.username,
                email : req.body.email,
                password : req.body.password

          }
          res.render("signUp_handlebars");
        		});
          	});
    	};
      exports.add = function (req, res, next) {
      	req.getConnection(function(err, connection){
      		if (err) return next(err);
      		var data = {
      			username : req.body.username,
            password : req.body.password

        		};

      		connection.query('insert into users set ?', data, function(err, results) {
        			if (err) return next(err);
      				res.redirect('/users');
      		});
      	});
      };
