var fs = require('fs');
var handlebars = require('handlebars');
var nelisaProducts = require('./nelisaProducts');

var week = process.argv[2]
var filePath = './data/' + week + '.csv'
var productList = nelisaProducts.linesInFiles(filePath);
var productTotal = nelisaProducts.groupingData(productList);
var getData = nelisaProducts.mostPopular(productTotal);
var leastData = nelisaProducts.leastPopular(productTotal);
var mostCategory = nelisaProducts.category(productTotal);
var productCategory = nelisaProducts.groupingData(productList);
var leastCategory = nelisaProducts.least(productCategory);

var newPurchase = nelisaPurchases.sales('./data/purchases.csv');
// / var array1 = nelisaPurchases.splittingPurchases(newPurchase);
var weekly1 = new Date('7-Feb');
var weekly2 = new Date('14-Feb');
var weekly3 = new Date('21-Feb');
var weekly4 = new Date('1-Mar');
var weekly0 = new Date('28-Jan');

var purchases = nelisaPurchases.splittingPurchases(newPurchase, weekly4, weekly3);
var salesWeek = nelisaPurchases.nelisaSold(productList);
var profitability = profitable.findingProfit(salesWeek,purchases);
var getProfit = profitable.mostProfit(profitability);

var data = {
  stats:[getData,leastData,mostCategory,leastCategory]
}
var source = fs.readFileSync('./nelisa.handlebars','utf-8');
//create template
var template = handlebars.compile(source);
//combine the template + data
var result = template(data);

fs.writeFileSync(week +'_weekSales.html',result)
