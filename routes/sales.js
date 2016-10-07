exports.show = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query('SELECT sales.id as sales_id, products.product, sales.qty, sales.dates, sales.salesPrice FROM products inner join sales on sales.product_id = products.id ORDER BY sales_id DESC', [], function(err, results) {
            if (err) return next(err);
            res.render('sales', {
                sales: results,
            });
        });
    });
};

// exports.show = function (req, res, next) {
// 	req.getConnection(function(err, connection){
// 		if (err) return next(err);
//     connection.query('SELECT from sales.id as sales_id, sales.dates, sales.qty, sales.salesPrice, products.product from products inner join sales on sales.product_id = products.id ORDER BY sales_id', [], function(err, results) {
//         	if (err) return next(err);
//     		res.render( 'sales', {
// 					sales : results,
//     		});
//       	});
// 	});
// };
