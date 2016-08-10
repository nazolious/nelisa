var fs = require('fs');
var handlebars = require('handlebars');
var nelisaProducts = require('./nelisaProducts');
var nelisaPurchases = require('./nelisaPurchases');
var mostCat = require('./mostCat');
var profitable = require('./profitable');
var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');


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
    // var source = fs.readFileSync('./views/layouts/main.handlebars', 'utf-8');
    //create template
    // var template = handlebars.compile(source);
    //combine the template + data
    // var result = template(dataWeek);
      // fs.writeFileSync(week +'_weekSales.html',result)
    return dataWeek;

};

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
    res.render('home');
  });

app.get('/sales/:week_name', function(req, res) {
    var week = req.params.week_name;
    // var weekFile = './data/' + week + '.csv';
    var data = getWeeklySales(week);
    res.render('weeklyStats',data);

    // var weekFile = "../"getWeeklySales(week);
    // res.send(weekFile);
});

app.set('port', (process.env.PORT || 5000));
//start the app like this:
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
