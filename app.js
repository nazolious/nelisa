var fs = require('fs');
var handlebars = require('handlebars');
var nelisaProducts = require('./nelisaProducts');
var nelisaPurchases = require('./nelisaPurchases');
var mostCat = require('./mostCat');
var profitable = require('./profitable');
var express = require('express');
var app = express();
// var exphbs  = require('express-handlebars');

var getWeeklySales = function(week) {
    //var week = process.argv[2]
    var filePath = './data/' + week + '.csv'
    var productList = nelisaProducts.linesInFiles(filePath);
    var productTotal = nelisaProducts.groupingData(productList);
    var getData = nelisaProducts.mostPopular(productTotal);
    var leastData = nelisaProducts.leastPopular(productTotal);
    var mostCategory = nelisaProducts.category(productTotal);
    var productCategory = nelisaProducts.groupingData(productList);
    var leastCategory = nelisaProducts.least(productCategory);

    var newPurchase = nelisaPurchases.sales('./data/purchases.csv');
    var purchasesMap = nelisaPurchases.splittingPurchases(newPurchase);
    var weekPurchases = nelisaPurchases.groupPurchasing(purchasesMap, week);
    var purchases = nelisaPurchases.qtySoldCost(weekPurchases, productTotal);
    var salesWeek = nelisaPurchases.nelisaSold(productList);
    var profitability = profitable.findingProfit(salesWeek, purchases);
    var getProfit = profitable.mostProfit(profitability);
    var getCat = mostCat.findingCategories(weekPurchases);

    var dataWeek = {
        stats: [getData, leastData, mostCategory, leastCategory, getProfit, getCat]
    }
    var source = fs.readFileSync('./views/layouts/main.handlebars', 'utf-8');
    //create template
    var template = handlebars.compile(source);
    //combine the template + data
    var result = template(dataWeek);
      // fs.writeFileSync(week +'_weekSales.html',result)
    return result

};

// create a route
// app.get('/sales/week1', function (req, res) {
//   var sales = getWeeklySales('week1');
//   res.send(createWeeklyData(sales));
// });
// app.get('/sales/week2',function (req, res) {
//   var sales = getWeeklySales('week2');
//   res.send(createWeeklyData(sales));
// });
// app.get('/sales/week3', function (req, res) {
//   var sales = getWeeklySales('week3');
//   res.send(createWeeklyData(sales));
// });
// app.get('/sales/week4', function(req, res) {
//   var sales = getWeeklySales('week4');
//   res.send(createWeeklyData(sales))
// })
app.get('/sales/:week_name', function(req, res) {
    var week = req.params.week_name;
    var sales = getWeeklySales(week);
    res.send(sales);
});
//start the server
var server = app.listen(5000, function() {
    var host = server.address().address;
    var port = server.address().port;
});
// app.set('port', (process.env.PORT || 5000));
// //start the app like this:
// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });
