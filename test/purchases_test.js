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
    it('split the purchases by week for week1', function() {
        var purchases = nelisaPurchases.purchasesWeeks(inputWeek, weekly1, weekly0);
        assert.equal(purchases['nelisaWeek1'].length, 23);
    });
    it('split the purchases by week for week2', function() {
        var purchases = nelisaPurchases.purchasesWeeks(inputWeek, weekly2, weekly1);
        assert.equal(purchases['nelisaWeek2'].length, 30);
    });
    it('split the purchases by week for week3', function() {
        var purchases = nelisaPurchases.purchasesWeeks(inputWeek, weekly3, weekly2);
        assert.equal(purchases['nelisaWeek3'].length, 32);
    });
    it('split the purchases by week for week4', function() {
        var purchases = nelisaPurchases.purchasesWeeks(inputWeek, weekly4, weekly3);
        assert.equal(purchases['nelisaWeek4'].length, 44);
    });
    var week1Purchases = nelisaPurchases.purchasesWeeks(inputWeek, weekly1, weekly0);
    var week2Purchases = nelisaPurchases.purchasesWeeks(inputWeek, weekly2, weekly1);
    var week3Purchases = nelisaPurchases.purchasesWeeks(inputWeek, weekly3, weekly2);
    var week4Purchases = nelisaPurchases.purchasesWeeks(inputWeek, weekly4, weekly3);
    var productList = nelisaProducts.linesInFiles('./data/week1.csv');
    var productList1 = nelisaProducts.linesInFiles('./data/week2.csv');
    var productList2 = nelisaProducts.linesInFiles('./data/week3.csv');
    var productList3 = nelisaProducts.linesInFiles('./data/week4.csv');

    it('group data purchases for week1', function() {
        var purchases = nelisaPurchases.groupPurchasing(week1Purchases, 'nelisaWeek1',productList);
        assert.deepEqual(purchases, purchases1);
    });
    it('group data purchases for week2', function() {
        var purchases = nelisaPurchases.groupPurchasing(week2Purchases, 'nelisaWeek2',productList1);
        assert.deepEqual(purchases, purchases2);
    });
    it('group data purchases for week3', function() {
        var purchases = nelisaPurchases.groupPurchasing(week3Purchases, 'nelisaWeek3',productList2);
        assert.deepEqual(purchases, purchases3);
    });
    it('group data purchases for week4', function() {
        var purchases = nelisaPurchases.groupPurchasing(week4Purchases, 'nelisaWeek4',productList3);
        assert.deepEqual(purchases, purchases4);
    });
});
var purchases1 = { 'Shampoo 1 litre': 120,
  'Soap Bar': 108,
  'Bananas - loose': 94,
  'Apples - loose': 108,
  'Mixed Sweets 5s': 294,
  Bread: 900,
  Imasi: 1230,
  'Chakalaka Can': 161,
  'Coke 500ml': 189,
  'Cream Soda 500ml': 99,
  'Fanta 500ml': 148.5,
  'Gold Dish Vegetable Curry Can': 85,
  'Iwisa Pap 5kg': 340,
  'Milk 1l': 273,
  'Top Class Soy Mince': 176
}

var purchases2 ={ 'Rose (plastic)': 140,
  'Milk 1l': 924,
  'Bananas - loose': 56,
  'Apples - loose': 31.5,
  'Mixed Sweets 5s': 324,
  Bread: 504,
  'Chakalaka Can': 147,
  'Coke 500ml': 294,
  'Gold Dish Vegetable Curry Can': 594,
  'Heart Chocolates': 500,
  Imasi: 1224,
  'Iwisa Pap 5kg': 200,
  'Top Class Soy Mince': 336,
  'Shampoo 1 litre': 360,
  'Valentine Cards': 28,
  'Soap Bar': 15,
  'Fanta 500ml': 103.5
}

var purchases3 = { 'Chakalaka Can': 263.5,
  'Cream Soda 500ml': 144,
  'Fanta 500ml': 154,
  'Gold Dish Vegetable Curry Can': 108,
  'Iwisa Pap 5kg': 280,
  'Milk 1l': 924,
  'Apples - loose': 75,
  'Mixed Sweets 5s': 174,
  Bread: 432,
  'Coke 500ml': 63,
  Imasi: 850,
  'Top Class Soy Mince': 192,
  'Shampoo 1 litre': 240,
  'Soap Bar': 48,
  'Bananas - loose': 17 }

var purchases4 = { 'Chakalaka Can': 1320,
  'Bananas - loose': 44,
  'Apples - loose': 96,
  'Mixed Sweets 5s': 120,
  Bread: 957,
  'Coke 500ml': 315,
  'Cream Soda 500ml': 171,
  'Fanta 500ml': 372,
  'Gold Dish Vegetable Curry Can': 1207,
  Imasi: 1156,
  'Milk 1l': 602,
  'Top Class Soy Mince': 1634,
  'Soap Bar': 375,
  'Shampoo 1 litre': 1040,
  'Iwisa Pap 5kg': 800 }
  //////////////////////////////////////////////////////////////////////////////////////////
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
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var salesPurchases1 = { 'Milk 1l': 117,
  Imasi: -480,
  Bread: -360,
  'Chakalaka Can': 69,
  'Gold Dish Vegetable Curry Can': 68,
  'Fanta 500ml': 66,
  'Coke 500ml': 162,
  'Cream Soda 500ml': 66,
  'Iwisa Pap 5kg': 170,
  'Top Class Soy Mince': 88,
  'Shampoo 1 litre': -30,
  'Soap Bar': -36,
  'Bananas - loose': 0,
  'Apples - loose': -36,
  'Mixed Sweets 5s': -174
}
var salesPurchases2 = {
    Imasi: 560,
    Bread: 291,
    'Chakalaka Can': 105,
    'Gold Dish Vegetable Curry Can': 226,
    'Fanta 500ml': 95.5,
    'Coke 500ml': 231,
    'Cream Soda 500ml': NaN,
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
    'Valentine Cards': 16
}
// ///////////////////////////groupWeeks.csv///////////////////////////////////////
describe('group data for week',function(){
    it('should show the group data of week2', function() {
        var listProduct = nelisaProducts.linesInFiles('./data/week2.csv')
        var products = nelisaPurchases.nelisaSold(listProduct);
        assert.deepEqual(products, salesWeek2);
    });
    it('should show the group data of week1', function() {
        var listProduct = nelisaProducts.linesInFiles('./data/week1.csv');
        var products = nelisaPurchases.nelisaSold(listProduct);
        assert.deepEqual(products, salesWeek1);
    });
    it('should show the group data of week3', function() {
        var listProduct = nelisaProducts.linesInFiles('./data/week3.csv');
        var products = nelisaPurchases.nelisaSold(listProduct);
        assert.deepEqual(products, salesWeek3);
    });
    it('should show the group data of week4', function() {
        var listProduct = nelisaProducts.linesInFiles('./data/week4.csv');
        var products = nelisaPurchases.nelisaSold(listProduct);
        assert.deepEqual(products, salesWeek4);
    });
});
// ///////////////////////////////////////////////////////////////////////////
  describe('find the profit for each week',function(){
    it('find the profit for week1',function(){
    var profit = profitable.findingProfit(purchases1,salesWeek1);
    assert.deepEqual(profit,salesPurchases1);
  });
  it('find the profit for week2',function(){
    var profit = profitable.findingProfit(purchases2,salesWeek2);
    assert.deepEqual(profit,salesPurchases2);
  })
  it('find the profit for week3',function(){
    var profit = profitable.findingProfit(purchases3,salesWeek3);
    assert.deepEqual(profit,salesPurchases1);
  })
it('find the profit for week4',function(){
  var profit = profitable.findingProfit(purchases4,salesWeek4);
  assert.deepEqual(profit,salesPurchases1);
})
});
