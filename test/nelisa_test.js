jecvar assert = require('assert');
var nelisaProducts = require('../nelisaProducts');
var nelisaPurchases = require('../nelisaPurchases');

describe('show data of the weeks', function() {

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
/////////////////groupingData//////////////////////////////////////////
var product1 = {
    'Milk 1l': 39,
    'Imasi': 30,
    'Bread': 45,
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
    'Imasi': 36,
    'Bread': 28,
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
var product3 = {
    'Imasi': 25,
    'Bread': 24,
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
    'Milk 1l': 28
};
var product4 = {
    'Imasi': 34,
    'Bread': 33,
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
    'Milk 1l': 43
};
//////////////////////////groupingData/////////////////////////////////
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
    it('group data for week3', function() {
        var productList = nelisaProducts.linesInFiles('./data/week3.csv');
        var products = nelisaProducts.groupingData(productList);
        assert.deepEqual(products, product3);
    });
    it('group data for week4', function() {
        var productList = nelisaProducts.linesInFiles('./data/week4.csv');
        var products = nelisaProducts.groupingData(productList);
        assert.deepEqual(products, product4);
    });
});
// \\\\\\\\\\\\\\\\\\\\\\\\\\ popular products//////////////////////////////
describe('find the most popular products sold each week', function() {
    it('should tell the most popular products for week1', function() {
        var products = nelisaProducts.mostPopular(product1);
        assert.deepEqual(products, {
            description: 'Most Popular Product',
            item: "Coke 500ml",
            qty: 54
        });
    });

    it('should tell the most popular products for week2', function() {
        var products = nelisaProducts.mostPopular(product2);
        assert.deepEqual(products, {
          description: 'Most Popular Product',
            item: 'Mixed Sweets 5s',
            qty: 54
        });
    });

    it('should tell the most popular products for week3', function() {
        var products = nelisaProducts.mostPopular(product3);
        assert.deepEqual(products, {
          description: 'Most Popular Product',
            item: 'Mixed Sweets 5s',
            qty: 29
        });
    });

    it('should tell the most popular products for week4', function() {
        var products = nelisaProducts.mostPopular(product4);
        assert.deepEqual(products, {
          description: 'Most Popular Product',
            item: "Coke 500ml",
            qty: 45
        });
    });
});
////////////////////////////////leastPopular/////////////////////////////////
describe('find the least popular products sold each week', function() {
    it('should tell the least popular products for week1', function() {
        var products = nelisaProducts.leastPopular(product1);
        assert.deepEqual(products, {
            description: 'Least Popular Product',
            item: "Shampoo 1 litre",
            qty: 3
        });
    });

    it('should tell the least popular products for week2', function() {
        var products = nelisaProducts.leastPopular(product2);
        assert.deepEqual(products, {
            description: 'Least Popular Product',
            item: "Soap Bar",
            qty: 5
        });
    });

    it('should tell the least popular products for week3', function() {
        var products = nelisaProducts.leastPopular(product3);
        assert.deepEqual(products, {
            description: 'Least Popular Product',
            item: "Iwisa Pap 5kg",
            qty: 4
        });
    });

    it('should tell the least popular products for week4', function() {
        var products = nelisaProducts.leastPopular(product4);
        assert.deepEqual(products, {
            description: 'Least Popular Product',
            item: "Shampoo 1 litre",
            qty: 13
        });
    });
});
///////////////////////categoryData//////////////////////////////////////////////////
var one = {
    'Dairy': 69,
    'Grains': 84,
    'Canned': 23,
    'canned': 17,
    'Drinks': 109,
    'Personal Care': 15,
    'Fruit': 83
};
var two = {
    'Dairy': 64,
    'Grains': 59,
    'Canned': 21,
    'canned': 27,
    'Drinks': 87,
    'Personal Care': 11,
    'Fruit': 49,
    'Sugar-Candy': 74,
    'Gifts and Cards': 28
};
var three = {
    'Dairy': 53,
    'Grains': 40,
    'Canned': 17,
    'canned': 8,
    'Drinks': 44,
    'Personal Care': 12,
    'Fruit': 42
};
var four = {
    'Dairy': 77,
    'Grains': 92,
    'Canned': 33,
    'canned': 34,
    'Drinks': 88,
    'Personal Care': 38,
    'Fruit': 54
};
/////////////////////////////most category///////////////////////////////////
describe('find the most popular category sold each week', function() {
    it('should tell the most popular category sold for week1', function() {
        var products = nelisaProducts.category(product1);
        assert.deepEqual(products, {
          description: 'Most Popular category'
            category: 'Drinks',
            quantity: 109
        });
    });

    it('should tell the most popular category sold for week2', function() {
        var products = nelisaProducts.category(product2);
        assert.deepEqual(products, {
          description: 'Most Popular category',
            category: 'Drinks',
            quantity: 87
        });
    });

    it('the most popular category sold for week3', function() {
        var products = nelisaProducts.category(product3);
        assert.deepEqual(products, {
          description: 'Most Popular category',
            category: 'Dairy',
            quantity: 53
        });
    });

    it('the most popular category sold for week4', function() {
        var products = nelisaProducts.category(product4);
        assert.deepEqual(products, {
          description: 'Most Popular category',
            category: 'Grains',
            quantity: 92
        });
    });
});
////////////////leastCategory///////////////////////////////////////
describe('find the least popular category sold each week', function() {
    it('find the least popular category sold for week1', function() {
        var products = nelisaProducts.least(one);
        assert.deepEqual(products, {
          description: 'Least Popular category',
            category: 'Personal Care',
            quantity: 15
        });
    });
    it('find the least popular category sold for week2', function() {
        var products = nelisaProducts.least(two);
        assert.deepEqual(products, {
            description: 'Least Popular category',
            category: 'Personal Care',
            quantity: 11
        })
    });
    it('find the least popular category sold for week3', function() {
        var products = nelisaProducts.least(three);
        assert.deepEqual(products, {
            description: 'Least Popular category',
            category: 'canned',
            quantity: 8
        });
    });
    it('find the least popular category sold for week4', function() {
        var products = nelisaProducts.least(four);
        assert.deepEqual(products, {
            description: 'Least Popular category',
            category: 'Canned',
            quantity: 33
        });
    });
});
