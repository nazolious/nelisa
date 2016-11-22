exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT purchases.id as purchases_id, products.product, purchases.qty, purchases.date, purchases.cost FROM products inner join purchases on purchases.product_id = products.id ORDER BY date ASC', [], function(err, results) {
        	if (err) return next(err);
    		res.render('purchases', {
					purchases : results,
					user : req.session.user,
					is_admin : req.session.is_admin
    		});
      	});
	});
};
exports.showAdd = function(req, res){
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from products', [], function(err, products) {
        	if (err) return next(err);
    		res.render( 'add_purchases', {
					products : products
    		});
      	});
	});
};
exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var data = {
			date : req.body.date,
      product_id : req.body.product_id,
			qty : req.body.qty,
			cost : req.body.cost
  		};

		connection.query('insert into purchases set ?', data, function(err, results) {
  			if (err) return next(err);
				res.redirect('/purchases');
		});
	});
};
exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM products', [id], function(err, products){
			if(err) return next(err);
			connection.query('SELECT * FROM purchases WHERE id = ?', [id], function(err,purchases){
				if(err) return next(err);
				var purchases = purchases[0];
				products = products.map(function(product){
					product.selected = product.id === purchases.product_id ? "selected" : "";
					return product;
				});
				res.render('edit_purchases', {
					products : products,
					data : purchases
				});
			});
		});
	});
}
exports.update = function(req, res, next){

	var data = {
			date : req.body.date,
			qty : req.body.qty,
			cost : req.body.cost,
			product_id : req.body.product_id

		};
  	var id = req.params.id;
  	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('UPDATE purchases SET ? WHERE id = ?', [data, id], function(err, rows){
			if (err) return next(err);
      		res.redirect('/purchases');
		});
    });
};
exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM purchases WHERE id = ?', [id], function(err,rows){
			if(err) return next(err);
			res.redirect('/purchases');
		});
	});
};
