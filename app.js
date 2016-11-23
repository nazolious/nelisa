'use strict';

var fs = require('fs');
// var handlebars = require('handlebars');
var nelisaProducts = require('./nelisaProducts');
var nelisaPurchases = require('./nelisaPurchases');
var mostCat = require('./mostCat');
var profitable = require('./profitable');
var express = require('express');
var mysql = require('mysql');
var myConnection = require('express-myconnection');
var bodyParser = require('body-parser');
var app = express();
var exphbs = require('express-handlebars');
var products = require('./routes/products');
var categories = require('./routes/categories');
var purchases = require('./routes/purchases');
var signUp = require('./routes/signUp');
var sales = require('./routes/sales');
var users = require('./routes/users');
var session = require('express-session');
var flash = require('express-flash');
var bcrypt = require('bcrypt');

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
    var profitabilitusernamey = profitable.findingProfit(salesWeek, purchases);
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

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(session({
    secret: 'keyboard cat',
    cookie: {
        maxAge: 60000
    }
}))

// /setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));

app.use(bodyParser.urlencoded({
        extended: false
    }))

app.use(bodyParser.json())

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', {
        error: err
    });
}

app.post('/', function(req, res) {});

var checkUser = function(req, res, next) {
    console.log('checkuser');
    if (req.session.user || req.path === '/login') {
        return next();
    }
    res.redirect("/login");
}

var roles = {
    "nelisa": "admin",
    "sinazo": "user",
    "amani" : "admin"
}
app.get("/users", function(req, res) {
    res.render("users");
})

app.post("/login", function(req, res, next) {
    req.getConnection(function(err, connection) {
      var inputUser = {
          username: req.body.username,
          password: req.body.password,
          is_admin: roles[req.body.username] === "admin"
      }

        if (err) return next(err);
        connection.query('SELECT * from users where username = ?', [inputUser.username], function(err, results) {
            if (err) return next(err);

            if ( results.length === 0) {
            return res.redirect('/login');
          }
          else {
            var dbUser = results[0];
            bcrypt.compare(inputUser.password, dbUser.password, function(err, match) {
              if (match) {
                req.session.user = inputUser
                  return res.redirect('/home');
              }
              else {
                return res.redirect("/login");
              }

            });


        }
  });
});
});

app.get("/home", checkUser, function(req, res) {
    return res.render("home", {
        user: req.session.user
    });
});

app.get('/logout', function(req, res) {
    delete req.session.user;
    res.redirect('login');
})

app.get("/signUp", function(req, res) {
    res.render("signUp", {});
});

app.get("/login", function(req, res) {
    res.render("login", {});
});

app.get('/categories', checkUser, categories.show);
app.get('/categories/add', checkUser, categories.showAdd);
app.post('/categories/add', checkUser, categories.add);
app.get('/categories/edit/:id', checkUser, categories.get);
app.post('/categories/update/:id', checkUser, categories.update);
app.get('/categories/delete/:id', checkUser, categories.delete);

app.get('/products', checkUser, products.show);
app.get('/products/add', checkUser, products.showAdd);
app.post('/products/add', checkUser, products.add);
app.get('/products/edit/:id', checkUser, products.get);
app.post('/products/update/:id', checkUser, products.update);
app.get('/products/delete/:id', checkUser, products.delete);

app.get('/sales', checkUser, sales.show);
app.get('/sales/add', checkUser, sales.showAdd);
app.post('/sales/add', checkUser, sales.add);
app.get('/sales/edit/:id', checkUser, sales.get);
app.post('/sales/update/:id', checkUser, sales.update);
app.get('/sales/delete/:id', checkUser, sales.delete);

app.get('/purchases', checkUser, purchases.show);
app.get('/purchases/add', checkUser, purchases.showAdd);
app.post('/purchases/add', checkUser, purchases.add);
app.get('/purchases/edit/:id', checkUser, purchases.get);
app.post('/purchases/update/:id', checkUser, purchases.update);
app.get('/purchases/delete/:id', checkUser, purchases.delete);

app.get('/users/', users.show);
app.get('/users/add', users.showAdd);
app.post('/users/add', users.add);

// app.get('/login', login.show);

app.post('/signUp/add', signUp.add);

app.get('/sales/:week_name', function(req, res) {
    var week = req.params.week_name;
    // var weekFile = './data/' + week + '.csv';
    var data = getWeeklySales(week);
    res.render('weeklyStats', data);

    var weekFile = getWeeklySales(week);
    res.send(weekFile);
});

app.set('port', (process.env.PORT || 3000));

//start the app like this:
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
