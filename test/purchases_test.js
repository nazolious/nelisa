var nelisaPurchases = require('../nelisaPurchases');
var assert = require('assert');
var nelisaProducts = require('../nelisaProducts');
var profitable = require('../profitable');

var weekly1 = new Date('7-Feb');
var weekly2 = new Date('14-Feb');
var weekly3 = new Date('21-Feb');
var weekly4 = new Date('1-Mar');
var weekly0 = new Date('28-Jan');

var inputWeek = nelisaPurchases.sales('./data/purchases.csv');
describe('show the data for purchase', function() {
    var purchases = nelisaPurchases.sales('./data/purchases.csv');
    it('should show the length of purchases', function() {
        assert.equal(purchases.length, 153);
    });
    it('split the purchases by week for week1', function() {
        var purchases = nelisaPurchases.purchasesWeeks(inputWeek, weekly1, weekly0).weekly1.length;
        assert.equal(purchases, 23);
    });
    it('split the purchases by week for week2', function() {
        var purchases = nelisaPurchases.purchasesWeeks(inputWeek, weekly2, weekly1).weekly2.length;
        assert.equal(purchases, 30);
    });
    it('split the purchases by week for week3', function() {
        var purchases = nelisaPurchases.purchasesWeeks(inputWeek, weekly3, weekly2).weekly3.length;
        assert.equal(purchases, 32);
    });
    it('split the purchases by week for week4', function() {
        var purchases = nelisaPurchases.purchasesWeeks(inputWeek, weekly4, weekly3).weekly4.length;
        assert.equal(purchases, 44);
    });
    var week1Purchases = nelisaPurchases.purchasesWeeks(inputWeek, weekly1, weekly0).weekly1;
    var week2Purchases = nelisaPurchases.purchasesWeeks(inputWeek,weekly2,weekly1).weekly2;
    var week3Purchases = nelisaPurchases.purchasesWeeks(inputWeek,weekly3,weekly2).weekly3;
    var week4Purchases = nelisaPurchases.purchasesWeeks(inputWeek,weekly4,weekly3).weekly4;
    it('group data purchases for week1',function(){
      var purchases = nelisaPurchases.groupPurchasing(week1Purchases);
      assert.deepEqual(purchases,purchases1);
});
it('group data purchases for week2',function(){
  var purchases = nelisaPurchases.groupPurchasing(week2Purchases);
  assert.deepEqual(purchases,purchases2);
});
it('group data purchases for week3',function(){
  var purchases = nelisaPurchases.groupPurchasing(week3Purchases);
  assert.deepEqual(purchases,purchases3);
});
it('group data purchases for week4',function(){
  var purchases = nelisaPurchases.groupPurchasing(week4Purchases);
  assert.deepEqual(purchases,purchases4);
});
});
var purchases4 = { 'Chakalaka Can': 25,
'Bananas - loose': 10,
'Apples - loose': 90,
'Mixed Sweets 5s': 24,
Bread: 180,
'Coke 500ml': 84,
'Cream Soda 500ml': 54,
'Fanta 500ml': 54,
'Gold Dish Vegetable Curry Can': 17,
Imasi: 255,
'Milk 1l': 140,
'Top Class Soy Mince': 33,
'Soap Bar': 15,
'Shampoo 1 litre': 40,
'Iwisa Pap 5kg': 200 }

var purchases3 = { 'Chakalaka Can': 70,
'Cream Soda 500ml': 54,
'Fanta 500ml': 54,
'Gold Dish Vegetable Curry Can': 50,
'Iwisa Pap 5kg': 100,
'Milk 1l': 105,
'Apples - loose': 135,
'Mixed Sweets 5s': 60,
Bread: 90,
'Coke 500ml': 84,
Imasi: 170,
'Top Class Soy Mince': 80,
'Shampoo 1 litre': 40,
'Soap Bar': 9,
'Bananas - loose': 20 }

var purchases2 = {'Rose (plastic)': 200,
'Milk 1l': 105,
'Bananas - loose': 4,
'Apples - loose': 30,
'Mixed Sweets 5s': 150,
Bread: 45,
'Chakalaka Can': 105,
'Coke 500ml': 42,
'Gold Dish Vegetable Curry Can': 17,
'Heart Chocolates': 500,
Imasi: 340,
'Iwisa Pap 5kg': 100,
'Top Class Soy Mince': 40,
'Shampoo 1 litre': 20,
'Valentine Cards': 40,
'Soap Bar': 15,
'Fanta 500ml': 54 };

var purchases1 = { 'Shampoo 1 litre': 40,
'Soap Bar': 15,
'Bananas - loose': 8,
'Apples - loose': 150,
'Mixed Sweets 5s': 450,
Bread: 270,
Imasi: 425,
'Chakalaka Can': 105,
'Coke 500ml': 126,
'Cream Soda 500ml': 81,
'Fanta 500ml': 108,
'Gold Dish Vegetable Curry Can': 75,
'Iwisa Pap 5kg': 100,
'Milk 1l': 70,
'Top Class Soy Mince': 80 };

var salesWeek1 = {
    'Milk 1l': 390,
    Imasi: 750,
    Bread: 540,
    'Chakalaka Can': 230,
    'Gold Dish Vegetable Curry Can': 153,
    'Fanta 500ml': 214.5,
    'Coke 500ml': 351,
    'Cream Soda 500ml': 165,
    'Iwisa Pap 5kg': 510,
    'Top Class Soy Mince': 264,
    'Shampoo 1 litre': 90,
    'Soap Bar': 72,
    'Bananas - loose': 94,
    'Apples - loose': 72,
    'Mixed Sweets 5s': 120
}
var salesWeek2 = {
    Imasi: 900,
    Bread: 336,
    'Chakalaka Can': 210,
    'Gold Dish Vegetable Curry Can': 243,
    'Fanta 500ml': 149.5,
    'Coke 500ml': 273,
    'Cream Soda 500ml': 165,
    'Iwisa Pap 5kg': 300,
    'Top Class Soy Mince': 252,
    'Shampoo 1 litre': 180,
    'Soap Bar': 30,
    'Bananas - loose': 56,
    'Apples - loose': 42,
    'Mixed Sweets 5s': 147,
    'Milk 1l': 280,
    'Heart Chocolates': 700,
    'Rose (plastic)': 210,
    'Valentine Cards': 56
}
var salesWeek3 = {
    Imasi: 625,
    Bread: 288,
    'Chakalaka Can': 170,
    'Gold Dish Vegetable Curry Can': 72,
    'Fanta 500ml': 91,
    'Coke 500ml': 117,
    'Cream Soda 500ml': 90,
    'Iwisa Pap 5kg': 120,
    'Top Class Soy Mince': 144,
    'Shampoo 1 litre': 120,
    'Soap Bar': 48,
    'Bananas - loose': 34,
    'Apples - loose': 50,
    'Mixed Sweets 5s': 80,
    'Milk 1l': 280
}
var salesWeek4 = {
    Imasi: 850,
    Bread: 396,
    'Chakalaka Can': 330,
    'Gold Dish Vegetable Curry Can': 306,
    'Fanta 500ml': 156,
    'Coke 500ml': 292.5,
    'Cream Soda 500ml': 142.5,
    'Iwisa Pap 5kg': 480,
    'Top Class Soy Mince': 516,
    'Shampoo 1 litre': 390,
    'Soap Bar': 150,
    'Bananas - loose': 44,
    'Apples - loose': 64,
    'Mixed Sweets 5s': 108,
    'Milk 1l': 430
};
var salesPurchases1 = { 'Milk 1l': 320,
  Imasi: 325,
  Bread: 270,
  'Chakalaka Can': 125,
  'Gold Dish Vegetable Curry Can': 78,
  'Fanta 500ml': 106.5,
  'Coke 500ml': 225,
  'Cream Soda 500ml': 84,
  'Iwisa Pap 5kg': 410,
  'Top Class Soy Mince': 184,
  'Shampoo 1 litre': 50,
  'Soap Bar': 57,
  'Bananas - loose': 86,
  'Apples - loose': -78,
  'Mixed Sweets 5s': -330
};
var salesPurchases2 = { Imasi: 560,
  Bread: 291,
  'Chakalaka Can': 105,
  'Gold Dish Vegetable Curry Can': 226,
  'Fanta 500ml': 95.5,
  'Coke 500ml': 231,
  'Cream Soda 500ml': 10000000,
  'Iwisa Pap 5kg': 200,
  'Top Class Soy Mince': 212,
  'Shampoo 1 litre': 160,
  'Soap Bar': 15,
  'Bananas - loose': 52,
  'Apples - loose': 12,
  'Mixed Sweets 5s': -3,
  'Milk 1l': 175,
  'Heart Chocolates': 200,
  'Rose (plastic)': 10,
  'Valentine Cards': 16 };

  // var salesPurchases3 = {

// ///////////////////////////groupWeeks.csv///////////////////////////////////////
describe('group data for week',function(){
    it('should show the group data of week2', function() {
        var listProduct = nelisaProducts.linesInFiles('./data/week2.csv')
        var products = nelisaPurchases.profitable(listProduct);
        assert.deepEqual(products, salesWeek2);
    });
    it('should show the group data of week1', function() {
        var listProduct = nelisaProducts.linesInFiles('./data/week1.csv');
        var products = nelisaPurchases.profitable(listProduct);
        assert.deepEqual(products, salesWeek1);
    });
    it('should show the group data of week3', function() {
        var listProduct = nelisaProducts.linesInFiles('./data/week3.csv');
        var products = nelisaPurchases.profitable(listProduct);
        assert.deepEqual(products, salesWeek3);
    });
    it('should show the group data of week4', function() {
        var listProduct = nelisaProducts.linesInFiles('./data/week4.csv');
        var products = nelisaPurchases.profitable(listProduct);
        assert.deepEqual(products, salesWeek4);
    });
  });
    describe('find the profit for each week',function(){
      it('find the profit for week1',function(){
      var profit = profitable.findingProfit(purchases1,salesWeek1);
      assert.deepEqual(profit,salesPurchases1);
    });
    it('find the profit for week2',function(){
      var profit = profitable.findingProfit(purchases2,salesWeek2);
      assert.deepEqual(profit,salesPurchases2);
    });
    // it('find the profit for week3',function(){
    //   var profit = profitable.findingProfit(purchases3,salesWeek3);
    //   assert.deepEqual(profit,salesPurchases1);
    // })
    // it('find the profit for week4',function(){
    //   var profit = profitable.findingProfit(purchases4,salesWeek4);
    //   assert.deepEqual(profit,salesPurchases1);
    // })
});
