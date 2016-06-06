var assert = require('assert');
var nelisaProducts = require('../nelisaProducts');

describe('show data of nelisa spaza', function() {

    it('should test for length of week1', function() {
        var products = nelisaProducts.linesInFiles('./data/week1.csv');
        assert.equal(105, products.length);
    });

    it('should test for length week2', function() {
        var products = nelisaProducts.linesInFiles('./data/week2.csv');
        assert.equal(117, products.length);
    });

    it('should test for length week3', function() {
        var products = nelisaProducts.linesInFiles('./data/week3.csv');
        assert.equal(104, products.length);
    });

    it('should test for length week4', function() {
        var products = nelisaProducts.linesInFiles('./data/week4.csv');
        assert.equal(119, products.length);
    });
});

var product1 = {
    'Milk 1l': 39,
    Imasi: 30,
    Bread: 45,
    'Chakalaka Can': 23,
    'Gold Dish Vegetable Curry Can': 17,
    'Fanta 500ml': 33,
    'Coke 500ml': 54,
    'Cream Soda 500ml': 22,
    'Iwisa Pap 5kg': 17,
    'Top Class Soy Mince': 22,
    'Shampoo 1 litre': 3,
    'Soap Bar': 12,
    'Bananas - loose': 47,
    'Apples - loose': 36,
    'Mixed Sweets 5s': 49
};

var product2 = {
    Imasi: 36,
    Bread: 28,
    'Chakalaka Can': 21,
    'Gold Dish Vegetable Curry Can': 27,
    'Fanta 500ml': 23,
    'Coke 500ml': 42,
    'Cream Soda 500ml': 22,
    'Iwisa Pap 5kg': 10,
    'Top Class Soy Mince': 21,
    'Shampoo 1 litre': 6,
    'Soap Bar': 5,
    'Bananas - loose': 28,
    'Apples - loose': 21,
    'Mixed Sweets 5s': 54,
    'Milk 1l': 28,
    'Heart Chocolates': 20,
    'Rose (plastic)': 14,
    'Valentine Cards': 14
};

var product3 = { Imasi: 25,
  Bread: 24,
  'Chakalaka Can': 17,
  'Gold Dish Vegetable Curry Can': 8,
  'Fanta 500ml': 14,
  'Coke 500ml': 18,
  'Cream Soda 500ml': 12,
  'Iwisa Pap 5kg': 4,
  'Top Class Soy Mince': 12,
  'Shampoo 1 litre': 4,
  'Soap Bar': 8,
  'Bananas - loose': 17,
  'Apples - loose': 25,
  'Mixed Sweets 5s': 29,
  'Milk 1l': 28 };

var product4 = { Imasi: 34,
  Bread: 33,
  'Chakalaka Can': 33,
  'Gold Dish Vegetable Curry Can': 34,
  'Fanta 500ml': 24,
  'Coke 500ml': 45,
  'Cream Soda 500ml': 19,
  'Iwisa Pap 5kg': 16,
  'Top Class Soy Mince': 43,
  'Shampoo 1 litre': 13,
  'Soap Bar': 25,
  'Bananas - loose': 22,
  'Apples - loose': 32,
  'Mixed Sweets 5s': 40,
  'Milk 1l': 43 };

describe('group data the product list', function() {
    it('group data for week1', function() {
        var productList = nelisaProducts.linesInFiles('./data/week1.csv');
        var products = nelisaProducts.groupingData(productList);
        assert.deepEqual(products, product1);
    });

    it('group data for week2', function() {
        var productList = nelisaProducts.linesInFiles('./data/week2.csv');
        var products = nelisaProducts.groupingData(productList);
        assert.deepEqual(products, product2);
    });
    //
    it('group data for week3',function(){
      var productList = nelisaProducts.linesInFiles('./data/week3.csv');
      var products = nelisaProducts.groupingData(productList);
      assert.deepEqual(products,product3);
    });

      it('group data for week4',function(){
        var productList = nelisaProducts.linesInFiles('./data/week4.csv');
        var products = nelisaProducts.groupingData(productList);
        assert.deepEqual(products,product4);
    });
});
