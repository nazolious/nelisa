'use strict';
var fs = require('fs');
var handlebars = require('handlebars');
var nelisaProducts = require('./nelisaProducts');
var nelisaPurchases = require('./nelisaPurchases');
var mostCat = require('./mostCat');
var profitable = require('./profitable');
var express = require('express');
var mysql = require('mysql');
var myConnection = require('express-myconnection');
var bodyParser = require('body-parser');
var app = express();
var exphbs  = require('express-handlebars');
var products = require('./routes/products');
var categories = require('./routes/categories');

var dbOptions = {
      host: 'localhost',
      user: 'root',
      password: 'Amani39bangani',
      port: 3306,
      database: 'nelisa'
};

// var getWeeklySales = function(week) {
//     //var week = process.argv[2]
//     var filePath = './data/' + week + '.csv'
//     var productList = nelisaProducts.linesInFiles(filePath);
//     var productTotal = nelisaProducts.groupingData(productList);
//     var getData = nelisaProducts.mostPopular(productTotal);
//     var leastData = nelisaProducts.leastPopular(productTotal);
//     var mostCategory = nelisaProducts.category(productTotal);
//     var productCategory = nelisaProducts.groupingData(productList);
//     var leastCategory = nelisaProducts.least(productCategory);
//
//     var newPurchase = nelisaPurchases.sales('./data/purchases.csv');
//     var purchasesMap = nelisaPurchases.splittingPurchases(newPurchase);
//     var weekPurchases = nelisaPurchases.groupPurchasing(purchasesMap, week);
//     var purchases = nelisaPurchases.qtySoldCost(weekPurchases, productTotal);
//     var salesWeek = nelisaPurchases.nelisaSold(productList);
//     var profitability = profitable.findingProfit(salesWeek, purchases);
//     var getProfit = profitable.mostProfit(profitability);
//     var getCat = mostCat.findingCategories(weekPurchases);
//
//     var dataWeek = {
//         stats: [getData, leastData, mostCategory, leastCategory, getProfit, getCat]
//     }
//
//     return dataWeek;
//
// };

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// /setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}
//setup the handlers

app.get('/categories', categories.show);
// app.get('/categories/add', categories.showAdd);
// app.get('/categories/edit/:id', categories.get);
// app.post('/categories/update/:id', categories.update);
// app.post('/categories/add', categories.add);
// //this should be a post but this is only an illustration of CRUD - not on good practices
// app.get('/categories/delete/:id', categories.delete);
app.get('/products', products.show);
// app.get('/', function (req, res) {
//     res.render('home');
//   });
//
// app.get('/sales/:week_name', function(req, res) {
//     var week = req.params.week_name;
//     // var weekFile = './data/' + week + '.csv';
//     var data = getWeeklySales(week);
//     res.render('weeklyStats',data);
//
//     var weekFile = getWeeklySales(week);
//     res.send(weekFile);
// });

app.set('port', (process.env.PORT || 5000));
//start the app like this:
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
