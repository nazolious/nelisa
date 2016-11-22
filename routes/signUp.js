var bcrypt = require('bcrypt');
exports.add = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        var data = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password

        }
        // console.log(data);
        var password = req.body.password;
        bcrypt.hash(password, 10, function(err, hash) {
            data.password = hash;

				console.log(password);
        connection.query('insert into users set ?', data, function(err, results) {
            if (err) return next(err);
            res.redirect('/login');
        });
			});	
    });
};
