var nelisaPurchases = require('../nelisaPurchases');
var assert = require('assert');
var mostCat = require('../mostCat');

describe('the most profitable category for each week',function(){
  it('the most profitable category for week1',function(){
    var cat = mostCat.findingCategories(purchases1);
    assert.deepEqual(cat, {
      description: 'Most Profit Category',
        category: 'Grains',
        profit: 39 })
  })
  it('the most profitable category for week2',function(){
    var cat = mostCat.findingCategories(purchases2);
    assert.deepEqual(cat,{
        description: 'Most Profit Category',
      category: 'Grains',
       profit: 37 })
  })
  it('the most profitable category for week3',function(){
    var cat = mostCat.findingCategories(purchases3);
    assert.deepEqual(cat,{
      description: 'Most Profit Category',
      category: 'Grains',
       profit: 47 })
  })
  it('the most profitable category for week4',function(){
    var cat = mostCat.findingCategories(purchases4);
    assert.deepEqual(cat,{
        description: 'Most Profit Category,'
      category: 'Grains',
      profit: 47 })
  })
})
var purchases1 =  { 'Shampoo 1 litre': 20,
  'Soap Bar': 3,
  'Bananas - loose': 1,
  'Apples - loose': 1.5,
  'Mixed Sweets 5s': 3,
  'Bread': 11,
  'Imasi': 24,
  'Chakalaka Can': 7,
  'Coke 500ml': 3.5,
  'Cream Soda 500ml': 4.5,
  'Fanta 500ml': 4.5,
  'Gold Dish Vegetable Curry Can': 5,
  'Iwisa Pap 5kg': 20,
  'Milk 1l': 7,
  'Top Class Soy Mince': 8
}
var purchases2 = {
    'Rose (plastic)': 10,
    'Milk 1l': 9.5,
    'Bananas - loose': 1,
    'Apples - loose': 1.5,
    'Mixed Sweets 5s': 3,
    'Bread': 9,
    'Chakalaka Can': 7,
    'Coke 500ml': 3.5,
    'Gold Dish Vegetable Curry Can': 5,
    'Heart Chocolates': 25,
    'Imasi': 17,
    'Iwisa Pap 5kg': 20,
    'Top Class Soy Mince': 8,
    'Shampoo 1 litre': 20,
    'Valentine Cards': 2,
    'Soap Bar': 3,
    'Fanta 500ml': 4.5
}

var purchases3 = {
    'Chakalaka Can': 8.5,
    'Cream Soda 500ml': 7.5,
    'Fanta 500ml': 6.5,
    'Gold Dish Vegetable Curry Can': 8.5,
    'Iwisa Pap 5kg': 30,
    'Milk 1l': 9.5,
    'Apples - loose': 1.5,
    'Mixed Sweets 5s': 3,
    'Bread': 9,
    'Coke 500ml': 3.5,
    'Imasi': 17,
    'Top Class Soy Mince': 8,
    'Shampoo 1 litre': 20,
    'Soap Bar': 3,
    'Bananas - loose': 1
}
var purchases4 = {
    'Chakalaka Can': 9,
    'Bananas - loose': 1,
    'Apples - loose': 1.5,
    'Mixed Sweets 5s': 3,
    'Bread': 9,
    'Coke 500ml': 3.5,
    'Cream Soda 500ml': 4.5,
    'Fanta 500ml': 4.5,
    'Gold Dish Vegetable Curry Can': 5,
    'Imasi': 17,
    'Milk 1l': 7,
    'Top Class Soy Mince': 8,
    'Soap Bar': 3,
    'Shampoo 1 litre': 20,
    'Iwisa Pap 5kg': 30
}
var categoryPurchases = { 'Dairy': 31,
  'Grains': 39,
  'Canned': 7,
  'canned': 5,
  'Drinks': 12.5,
  'Personal Care': 23,
  'Fruit': 2.5
}
