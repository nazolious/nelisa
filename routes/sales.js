exports.show = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query('SELECT sales.id as sales_id, products.product, sales.qty, sales.date, sales.salesPrice FROM products inner join sales on sales.product_id = products.id ORDER BY sales_id DESC', [], function(err, results) {
            if (err) return next(err);
            res.render('sales', {
                sales: results,
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
    		res.render( 'add_sales', {
					products : products,
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
				date : req.body.date,
				qty : req.body.qty,
				salesPrice : req.body.salesPrice,
				product_id : req.body.product_id
  		};

		connection.query('insert into sales set ?', data, function(err, results) {
  			if (err) return next(err);
				res.redirect('/sales');
		});
	});
};
exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM products', [id], function(err, products){
			if(err) return next(err);
			connection.query('SELECT * FROM sales WHERE id = ?', [id], function(err,sales){
				if(err) return next(err);
				var sales = sales[0];
				products = products.map(function(product){
					product.selected = product.id === sales.product_id ? "selected" : "";
					return product;
				});
				res.render('edit_sales', {
					products : products,
					data : sales,
          user : req.session.user,
          is_admin : req.session.user.is_admin
				});
			});
		});
	});
}
exports.update = function(req, res, next){

	var data = {
			date : req.body.date,
			qty : req.body.qty,
			salesPrice : req.body.salesPrice,
			product_id : req.body.product_id

		};
  	var id = req.params.id;
  	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('UPDATE sales SET ? WHERE id = ?', [data, id], function(err, rows){
			if (err) return next(err);
      		res.redirect('/sales');
		});
    });
};
exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM sales WHERE id = ?', [id], function(err,rows){
			if(err) return next(err);
			res.redirect('/sales');
		});
	});
};
