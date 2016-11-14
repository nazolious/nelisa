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
var purchases = require('./routes/purchases');
var sales = require('./routes/sales');
var session = require('express-session');

var dbOptions = {
      host: 'localhost',
      user: 'root',
      password: 'Amani39bangani',
      port: 3306,
      database: 'nelisa'
};

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

};

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
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
app.get('/categories/add', categories.showAdd);
app.post('/categories/add', categories.add);
app.get('/categories/edit/:id', categories.get);
app.post('/categories/update/:id', categories.update);
// //this should be a post but this is only an illustration of CRUD - not on good practices
app.get('/categories/delete/:id', categories.delete);

app.get('/products', products.show);
app.get('/products/add', products.showAdd);
app.post('/products/add', products.add);
app.get('/products/edit/:id', products.get);
app.post('/products/update/:id', products.update);
//this should be a post but this is only an illustration of CRUD - not on good practices
app.get('/products/delete/:id', products.delete);

app.get('/sales', sales.show);
app.get('/sales/add', sales.showAdd);
app.post('/sales/add', sales.add);
app.get('/sales/edit/:id', sales.get);
app.post('/sales/update/:id', sales.update);
app.get('/sales/delete/:id', sales.delete);

app.get('/purchases', purchases.show);
app.get('/purchases/add', purchases.showAdd);
app.post('/purchases/add', purchases.add);
app.get('/purchases/edit/:id', purchases.get);
app.post('/purchases/update/:id', purchases.update);
app.get('/purchases/delete/:id', purchases.delete);


  // var roles = {
  //   "sinazo" : "Admin",
  //   "Lee" : "viewer"
  // }

  // app.get('/home', function (req, res) {
  //     res.render('home');
  //   });
  app.post('/', function(req, res) {

  });
  //
  // app.get("/sign up", function(req, res){
  //     res.render("/home")
  // });

  app.get("/", function(req, res){
      res.redirect("/home");
  });

  var checkUser = function(req, res, next) {
    console.log('checkuser');
    if(req.session.user){
      return next();
    }
    res.redirect("/login");

  }
  app.post("/login", function(req, res){
    req.session.user = "sinazo",
       res.redirect("/home");
    })
  // app.post("/login", function(req, res){
  //   req.session.user = {
  //     name : req.body.username,
  //     is_Admin : roles[req.body.username] === "Admin"
  //   res.redirect("/home");
  // })
  app.get("/home", checkUser, function(req, res){
      res.render("home", {user : req.session.user});
  });
  app.get('/logout', function (req, res) {
    delete req.session.user;
    res.redirect('login');
  })
  app.get("/login", function(req, res){
      res.render("login", {});
  });

app.get('/', function (req, res) {
    res.render('home');
  });


app.get('/sales/:week_name', function(req, res) {
    var week = req.params.week_name;
    // var weekFile = './data/' + week + '.csv';
    var data = getWeeklySales(week);
    res.render('weeklyStats',data);

    var weekFile = getWeeklySales(week);
    res.send(weekFile);
});

app.set('port', (process.env.PORT || 3000));


//start the app like this:
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
