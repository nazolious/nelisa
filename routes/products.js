exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
    connection.query('SELECT products.id as product_id, products.product, categories.category FROM categories inner join products on products.category_Id = categories.Id ORDER BY product_id', [], function(err, results) {
        	if (err) return next(err);
    		res.render( 'products', {
					products : results,
					user : req.session.user,
					is_admin : req.session.user.is_admin
    		});
      	});
	});
};
exports.showAdd = function(req, res){
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from categories', [], function(err, categories) {
        	if (err) return next(err);
    		res.render( 'add', {
					categories : categories,
					user : req.session.user,
					is_admin : req.session.user.is_admin
    		});
      	});
	});
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var data = {
			category_id : Number(req.body.category_id),
      		product : req.body.product
			// price : Number(req.body.price)
  		};

		connection.query('insert into products set ?', data, function(err, results) {
  			if (err) return next(err);
				res.redirect('/products');
		});
	});
};


exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM categories', [id], function(err, categories){
			if(err) return next(err);
			connection.query('SELECT * FROM products WHERE id = ?', [id], function(err,products){
				if(err) return next(err);
				var product = products[0];
				categories = categories.map(function(category){
					category.selected = category.id === product.category_id ? "selected" : "";
					return category;
				});
				res.render('edit', {
					categories : categories,
					data : product,
					user : req.session.user,
					is_admin : req.session.user.is_admin
				});
			});
		});
	});
};

exports.update = function(req, res, next){

	var data = {
		category_id : Number(req.body.category_id),
		product : req.body.product
		// price : Number(req.body.price)
	};
  	var id = req.params.id;
  	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('UPDATE products SET ? WHERE id = ?', [data, id], function(err, rows){
			if (err) return next(err);
      		res.redirect('/products');
		});
    });
};
exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM products WHERE id = ?', [id], function(err,rows){
			if(err) return next(err);
			res.redirect('/products');
		});
	});
};
