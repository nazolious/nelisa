var assert = require('assert');
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

var product3 = {
    Imasi: 25,
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
    'Milk 1l': 28
};

var product4 = {
    Imasi: 34,
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
    //
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
            item: "Coke 500ml",
            qty: 54
        });
    });

    it('should tell the most popular products for week2', function() {
        var products = nelisaProducts.mostPopular(product2);
        assert.deepEqual(products, {
            item: 'Mixed Sweets 5s',
            qty: 54
        });
    });

    it('should tell the most popular products for week3', function() {
        var products = nelisaProducts.mostPopular(product3);
        assert.deepEqual(products, {
            item: 'Mixed Sweets 5s',
            qty: 29
        });
    });

    it('should tell the most popular products for week4', function() {
        var products = nelisaProducts.mostPopular(product4);
        assert.deepEqual(products, {
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
            item: "Shampoo 1 litre",
            qty: 3
        });
    });

    it('should tell the least popular products for week2', function() {
        var products = nelisaProducts.leastPopular(product2);
        assert.deepEqual(products, {
            item: "Soap Bar",
            qty: 5
        });
    });

    it('should tell the least popular products for week3', function() {
        var products = nelisaProducts.leastPopular(product3);
        assert.deepEqual(products, {
            item: "Iwisa Pap 5kg",
            qty: 4
        });
    });

    it('should tell the least popular products for week4', function() {
        var products = nelisaProducts.leastPopular(product4);
        assert.deepEqual(products, {
            item: "Shampoo 1 litre",
            qty: 13
        });
    });
});
///////////////////////categoryData//////////////////////////////////////////////////
var one = {
    Dairy: 69,
    Grains: 84,
    Canned: 23,
    canned: 17,
    Drinks: 109,
    'Personal Care': 15,
    Fruit: 83
};
var two = {
    Dairy: 64,
    Grains: 59,
    Canned: 21,
    canned: 27,
    Drinks: 87,
    'Personal Care': 11,
    Fruit: 49,
    'Sugar-Candy': 74,
    'Gifts and Cards': 28
};
var three = {
    Dairy: 53,
    Grains: 40,
    Canned: 17,
    canned: 8,
    Drinks: 44,
    'Personal Care': 12,
    Fruit: 42
};
var four = {
    Dairy: 77,
    Grains: 92,
    Canned: 33,
    canned: 34,
    Drinks: 88,
    'Personal Care': 38,
    Fruit: 54

};
/////////////////////////////most category///////////////////////////////////
describe('find the most popular category sold each week', function() {
    it('should tell the most popular category sold for week1', function() {
        var products = nelisaProducts.category(product1);
        assert.deepEqual(products, {
            category: 'Drinks',
            quantity: 109
        });
    });

    it('should tell the most popular category sold for week2', function() {
        var products = nelisaProducts.category(product2);
        assert.deepEqual(products, {
            category: 'Drinks',
            quantity: 87
        });
    });

    it('the most popular category sold for week3', function() {
        var products = nelisaProducts.category(product3);
        assert.deepEqual(products, {
            category: 'Dairy',
            quantity: 53
        });
    });

    it('the most popular category sold for week4', function() {
        var products = nelisaProducts.category(product4);
        assert.deepEqual(products, {
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
            category: 'Personal Care',
            quantity: 15
        });
    });
    it('find the least popular category sold for week2', function() {
        var products = nelisaProducts.least(two);
        assert.deepEqual(products, {
            category: 'Personal Care',
            quantity: 11
        })
    });
    it('find the least popular category sold for week3', function() {
        var products = nelisaProducts.least(three);
        // console.log(products);
        assert.deepEqual(products, {
            category: 'canned',
            quantity: 8
        });
    });
    it('find the least popular category sold for week4', function() {
        var products = nelisaProducts.least(four);
        assert.deepEqual(products, {
            category: 'Canned',
            quantity: 33
        });
    });
});
// ////////////////////groupPurchasing//////////////////////////////////////
var weekly1 = new Date('7-Feb');
var weekly2 = new Date('14-Feb');
var weekly3 = new Date('21-Feb');
var weekly4 = new Date('1-Mar');
var weekly0 = new Date('28-Jan');
var weekPurchase1 = [{ Shop: 'HomeMade',
    dates: '02-Feb',
    Items: 'Shampoo 1 litre',
    totalCost: 'R20,00' },
  { Shop: 'HomeMade',
    dates: '02-Feb',
    Items: 'Soap Bar',
    totalCost: 'R9,00' },
  { Shop: 'Epping Market',
    dates: '03-Feb',
    Items: 'Bananas - loose',
    totalCost: 'R12,00' },
  { Shop: 'Epping Market',
    dates: '03-Feb',
    Items: 'Apples - loose',
    totalCost: 'R150,00' },
  { Shop: 'Epping Market',
    dates: '03-Feb',
    Items: 'Mixed Sweets 5s',
    totalCost: 'R720,00' },
  { Shop: 'HomeMade',
    dates: '04-Feb',
    Items: 'Shampoo 1 litre',
    totalCost: 'R40,00' },
  { Shop: 'HomeMade',
    dates: '04-Feb',
    Items: 'Soap Bar',
    totalCost: 'R15,00' },
  { Shop: 'Joe Spaza Shop',
    dates: '04-Feb',
    Items: 'Bread',
    totalCost: 'R44,00' },
  { Shop: 'Joe Spaza Shop',
    dates: '04-Feb',
    Items: 'Imasi',
    totalCost: 'R96,00' },
  { Shop: 'Epping Market',
    dates: '06-Feb',
    Items: 'Bananas - loose',
    totalCost: 'R8,00' },
  { Shop: 'Epping Market',
    dates: '06-Feb',
    Items: 'Apples - loose',
    totalCost: 'R150,00' },
  { Shop: 'Epping Market',
    dates: '06-Feb',
    Items: 'Mixed Sweets 5s',
    totalCost: 'R450,00' },
  { Shop: 'HomeMade',
    dates: '06-Feb',
    Items: 'Soap Bar',
    totalCost: 'R15,00' },
  { Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Bread',
    totalCost: 'R270,00' },
  { Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Chakalaka Can',
    totalCost: 'R105,00' },
  { Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Coke 500ml',
    totalCost: 'R126,00' },
  { Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Cream Soda 500ml',
    totalCost: 'R81,00' },
  { Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Fanta 500ml',
    totalCost: 'R108,00' },
  { Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    totalCost: 'R75,00' },
  { Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Imasi',
    totalCost: 'R425,00' },
  { Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Iwisa Pap 5kg',
    totalCost: 'R100,00' },
  { Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Milk 1l',
    totalCost: 'R70,00' },
  { Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Top Class Soy Mince',
    totalCost: 'R80,00' } ];
var inputWeek = nelisaPurchases.sales('./data/purchases.csv');
describe('show the data for purchase', function() {
  var purchases = nelisaPurchases.sales('./data/purchases.csv');
    it('should show the length of purchases', function() {

        assert.equal(purchases.length, 153);
    });
    it('split the purchases by week for week1', function() {
        var purchases = nelisaPurchases.purchasesWeeks(inputWeek, weekly1,weekly0);
        assert.deepEqual(purchases,weekPurchase1);
    });
it('split the purchases by week for week2', function() {
    var purchases = nelisaPurchases.purchasesWeeks(inputWeek, weekly2,weekly1);
    assert.deepEqual(purchases,[ { Shop: 'ChinaTown',
    dates: '09-Feb',
    Items: 'Rose (plastic)',
    totalCost: 'R200,00' },
  { Shop: 'Joe Spaza Shop',
    dates: '09-Feb',
    Items: 'Milk 1l',
    totalCost: 'R28,50' },
  { Shop: 'Epping Market',
    dates: '10-Feb',
    Items: 'Bananas - loose',
    totalCost: 'R4,00' },
  { Shop: 'Epping Market',
    dates: '10-Feb',
    Items: 'Apples - loose',
    totalCost: 'R30,00' },
  { Shop: 'Epping Market',
    dates: '10-Feb',
    Items: 'Mixed Sweets 5s',
    totalCost: 'R450,00' },
  { Shop: 'Makro',
    dates: '10-Feb',
    Items: 'Bread',
    totalCost: 'R90,00' },
  { Shop: 'Makro',
    dates: '10-Feb',
    Items: 'Chakalaka Can',
    totalCost: 'R105,00' },
  { Shop: 'Makro',
    dates: '10-Feb',
    Items: 'Coke 500ml',
    totalCost: 'R63,00' },
  { Shop: 'Makro',
    dates: '10-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    totalCost: 'R25,00' },
  { Shop: 'Makro',
    dates: '10-Feb',
    Items: 'Heart Chocolates',
    totalCost: 'R500,00' },
  { Shop: 'Makro',
    dates: '10-Feb',
    Items: 'Imasi',
    totalCost: 'R170,00' },
  { Shop: 'Makro',
    dates: '10-Feb',
    Items: 'Iwisa Pap 5kg',
    totalCost: 'R100,00' },
  { Shop: 'Makro',
    dates: '10-Feb',
    Items: 'Milk 1l',
    totalCost: 'R70,00' },
  { Shop: 'Makro',
    dates: '10-Feb',
    Items: 'Top Class Soy Mince',
    totalCost: 'R120,00' },
  { Shop: 'HomeMade',
    dates: '11-Feb',
    Items: 'Shampoo 1 litre',
    totalCost: 'R40,00' },
  { Shop: 'HomeMade',
    dates: '11-Feb',
    Items: 'Valentine Cards',
    totalCost: 'R40,00' },
  { Shop: 'Joe Spaza Shop',
    dates: '12-Feb',
    Items: 'Milk 1l',
    totalCost: 'R28,50' },
  { Shop: 'Epping Market',
    dates: '13-Feb',
    Items: 'Bananas - loose',
    totalCost: 'R4,00' },
  { Shop: 'Epping Market',
    dates: '13-Feb',
    Items: 'Mixed Sweets 5s',
    totalCost: 'R150,00' },
  { Shop: 'HomeMade',
    dates: '13-Feb',
    Items: 'Shampoo 1 litre',
    totalCost: 'R60,00' },
  { Shop: 'HomeMade',
    dates: '13-Feb',
    Items: 'Soap Bar',
    totalCost: 'R15,00' },
  { Shop: 'Joe Spaza Shop',
    dates: '13-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    totalCost: 'R42,50' },
  { Shop: 'Makro',
    dates: '13-Feb',
    Items: 'Bread',
    totalCost: 'R45,00' },
  { Shop: 'Makro',
    dates: '13-Feb',
    Items: 'Coke 500ml',
    totalCost: 'R42,00' },
  { Shop: 'Makro',
    dates: '13-Feb',
    Items: 'Fanta 500ml',
    totalCost: 'R54,00' },
  { Shop: 'Makro',
    dates: '13-Feb',
    Items: 'Imasi',
    totalCost: 'R340,00' },
  { Shop: 'Makro',
    dates: '13-Feb',
    Items: 'Milk 1l',
    totalCost: 'R105,00' },
  { Shop: 'Makro',
    dates: '13-Feb',
    Items: 'Top Class Soy Mince',
    totalCost: 'R40,00' } ,
    { Shop: 'HomeMade',
      dates: '14-Feb',
      Items: 'Shampoo 1 litre',
      totalCost: 'R20,00' },
    { Shop: 'Joe Spaza Shop',
      dates: '14-Feb',
      Items: 'Gold Dish Vegetable Curry Can',
      totalCost: 'R17,00' } ]);
});
it('split the purchases by week for week3', function() {
    var purchases = nelisaPurchases.purchasesWeeks(inputWeek, weekly3,weekly2);
    assert.deepEqual(purchases,[ { Shop: 'Joe Spaza Shop',
    dates: '16-Feb',
    Items: 'Chakalaka Can',
    totalCost: 'R17,00' },
  { Shop: 'Joe Spaza Shop',
    dates: '16-Feb',
    Items: 'Cream Soda 500ml',
    totalCost: 'R15,00' },
  { Shop: 'Joe Spaza Shop',
    dates: '16-Feb',
    Items: 'Fanta 500ml',
    totalCost: 'R6,50' },
  { Shop: 'Joe Spaza Shop',
    dates: '16-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    totalCost: 'R17,00' },
  { Shop: 'Joe Spaza Shop',
    dates: '16-Feb',
    Items: 'Iwisa Pap 5kg',
    totalCost: 'R30,00' },
  { Shop: 'Joe Spaza Shop',
    dates: '16-Feb',
    Items: 'Milk 1l',
    totalCost: 'R57,00' },
  { Shop: 'Epping Market',
    dates: '17-Feb',
    Items: 'Apples - loose',
    totalCost: 'R90,00' },
  { Shop: 'Epping Market',
    dates: '17-Feb',
    Items: 'Mixed Sweets 5s',
    totalCost: 'R36,00' },
  { Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Bread',
    totalCost: 'R135,00' },
  { Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Chakalaka Can',
    totalCost: 'R70,00' },
  { Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Coke 500ml',
    totalCost: 'R84,00' },
  { Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Cream Soda 500ml',
    totalCost: 'R54,00' },
  { Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Fanta 500ml',
    totalCost: 'R54,00' },
  { Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    totalCost: 'R50,00' },
  { Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Imasi',
    totalCost: 'R255,00' },
  { Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Iwisa Pap 5kg',
    totalCost: 'R100,00' },
  { Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Milk 1l',
    totalCost: 'R105,00' },
  { Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Top Class Soy Mince',
    totalCost: 'R40,00' },
  { Shop: 'HomeMade',
    dates: '18-Feb',
    Items: 'Shampoo 1 litre',
    totalCost: 'R20,00' },
  { Shop: 'HomeMade',
    dates: '18-Feb',
    Items: 'Soap Bar',
    totalCost: 'R15,00' },
  { Shop: 'HomeMade',
    dates: '19-Feb',
    Items: 'Shampoo 1 litre',
    totalCost: 'R40,00' },
  { Shop: 'Joe Spaza Shop',
    dates: '19-Feb',
    Items: 'Milk 1l',
    totalCost: 'R9,50' },
  { Shop: 'Epping Market',
    dates: '20-Feb',
    Items: 'Bananas - loose',
    totalCost: 'R20,00' },
  { Shop: 'Epping Market',
    dates: '20-Feb',
    Items: 'Apples - loose',
    totalCost: 'R135,00' },
  { Shop: 'Epping Market',
    dates: '20-Feb',
    Items: 'Mixed Sweets 5s',
    totalCost: 'R60,00' },
  { Shop: 'HomeMade',
    dates: '20-Feb',
    Items: 'Shampoo 1 litre',
    totalCost: 'R40,00' },
  { Shop: 'HomeMade',
    dates: '20-Feb',
    Items: 'Soap Bar',
    totalCost: 'R9,00' },
  { Shop: 'Makro',
    dates: '20-Feb',
    Items: 'Bread',
    totalCost: 'R90,00' },
  { Shop: 'Makro',
    dates: '20-Feb',
    Items: 'Imasi',
    totalCost: 'R170,00' },
  { Shop: 'Makro',
    dates: '20-Feb',
    Items: 'Iwisa Pap 5kg',
    totalCost: 'R100,00' },
  { Shop: 'Makro',
    dates: '20-Feb',
    Items: 'Milk 1l',
    totalCost: 'R105,00' },
  { Shop: 'Makro',
    dates: '20-Feb',
    Items: 'Top Class Soy Mince',
    totalCost: 'R80,00' } ]
);
});
it('split the purchases by week for week4', function() {
    var purchases = nelisaPurchases.purchasesWeeks(inputWeek, weekly4,weekly3);
    assert.deepEqual(purchases,[ { Shop: 'Joe Spaza Shop',
    dates: '23-Feb',
    Items: 'Chakalaka Can',
    totalCost: 'R27,00' },
  { Shop: 'Epping Market',
    dates: '24-Feb',
    Items: 'Bananas - loose',
    totalCost: 'R10,00' },
  { Shop: 'Epping Market',
    dates: '24-Feb',
    Items: 'Apples - loose',
    totalCost: 'R135,00' },
  { Shop: 'Epping Market',
    dates: '24-Feb',
    Items: 'Mixed Sweets 5s',
    totalCost: 'R24,00' },
  { Shop: 'Makro',
    dates: '24-Feb',
    Items: 'Bread',
    totalCost: 'R135,00' },
  { Shop: 'Makro',
    dates: '24-Feb',
    Items: 'Chakalaka Can',
    totalCost: 'R70,00' },
  { Shop: 'Makro',
    dates: '24-Feb',
    Items: 'Coke 500ml',
    totalCost: 'R63,00' },
  { Shop: 'Makro',
    dates: '24-Feb',
    Items: 'Cream Soda 500ml',
    totalCost: 'R27,00' },
  { Shop: 'Makro',
    dates: '24-Feb',
    Items: 'Fanta 500ml',
    totalCost: 'R27,00' },
  { Shop: 'Makro',
    dates: '24-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    totalCost: 'R50,00' },
  { Shop: 'Makro',
    dates: '24-Feb',
    Items: 'Imasi',
    totalCost: 'R255,00' },
  { Shop: 'Makro',
    dates: '24-Feb',
    Items: 'Milk 1l',
    totalCost: 'R140,00' },
  { Shop: 'Makro',
    dates: '24-Feb',
    Items: 'Top Class Soy Mince',
    totalCost: 'R120,00' },
  { Shop: 'HomeMade',
    dates: '25-Feb',
    Items: 'Soap Bar',
    totalCost: 'R15,00' },
  { Shop: 'HomeMade',
    dates: '26-Feb',
    Items: 'Shampoo 1 litre',
    totalCost: 'R40,00' },
  { Shop: 'HomeMade',
    dates: '26-Feb',
    Items: 'Soap Bar',
    totalCost: 'R15,00' },
  { Shop: 'Joe Spaza Shop',
    dates: '26-Feb',
    Items: 'Bread',
    totalCost: 'R11,00' },
  { Shop: 'Joe Spaza Shop',
    dates: '26-Feb',
    Items: 'Fanta 500ml',
    totalCost: 'R13,00' },
  { Shop: 'Joe Spaza Shop',
    dates: '26-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    totalCost: 'R8,50' },
  { Shop: 'Joe Spaza Shop',
    dates: '26-Feb',
    Items: 'Iwisa Pap 5kg',
    totalCost: 'R30,00' },
  { Shop: 'Epping Market',
    dates: '27-Feb',
    Items: 'Bananas - loose',
    totalCost: 'R10,00' },
  { Shop: 'Epping Market',
    dates: '27-Feb',
    Items: 'Apples - loose',
    totalCost: 'R90,00' },
  { Shop: 'HomeMade',
    dates: '27-Feb',
    Items: 'Shampoo 1 litre',
    totalCost: 'R100,00' },
  { Shop: 'HomeMade',
    dates: '27-Feb',
    Items: 'Soap Bar',
    totalCost: 'R15,00' },
  { Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Bread',
    totalCost: 'R180,00' },
  { Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Chakalaka Can',
    totalCost: 'R105,00' },
  { Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Coke 500ml',
    totalCost: 'R84,00' },
  { Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Cream Soda 500ml',
    totalCost: 'R54,00' },
  { Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Fanta 500ml',
    totalCost: 'R54,00' },
  { Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    totalCost: 'R75,00' },
  { Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Imasi',
    totalCost: 'R255,00' },
  { Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Iwisa Pap 5kg',
    totalCost: 'R200,00' },
  { Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Milk 1l',
    totalCost: 'R140,00' },
  { Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Top Class Soy Mince',
    totalCost: 'R120,00' },
  { Shop: 'HomeMade',
    dates: '28-Feb',
    Items: 'Shampoo 1 litre',
    totalCost: 'R40,00' },
  { Shop: 'HomeMade',
    dates: '28-Feb',
    Items: 'Soap Bar',
    totalCost: 'R9,00' },
  { Shop: 'Joe Spaza Shop',
    dates: '28-Feb',
    Items: 'Chakalaka Can',
    totalCost: 'R25,50' },
  { Shop: 'Joe Spaza Shop',
    dates: '28-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    totalCost: 'R17,00' },
  { Shop: 'Joe Spaza Shop',
    dates: '28-Feb',
    Items: 'Top Class Soy Mince',
    totalCost: 'R55,00' },
  { Shop: 'HomeMade',
    dates: '01-Mar',
    Items: 'Shampoo 1 litre',
    totalCost: 'R40,00' },
  { Shop: 'HomeMade',
    dates: '01-Mar',
    Items: 'Soap Bar',
    totalCost: 'R15,00' },
  { Shop: 'Joe Spaza Shop',
    dates: '01-Mar',
    Items: 'Chakalaka Can',
    totalCost: 'R25,50' },
  { Shop: 'Joe Spaza Shop',
    dates: '01-Mar',
    Items: 'Gold Dish Vegetable Curry Can',
    totalCost: 'R17,00' },
  { Shop: 'Joe Spaza Shop',
    dates: '01-Mar',
    Items: 'Top Class Soy Mince',
    totalCost: 'R33,00' } ]
);
});
});
// var weekly1 = {
//     'Milk 1l': 390,
//     Imasi: 750,
//     Bread: 540,
//     'Chakalaka Can': 230,
//     'Gold Dish Vegetable Curry Can': 153,
//     'Fanta 500ml': 214.5,
//     'Coke 500ml': 351,
//     'Cream Soda 500ml': 165,
//     'Iwisa Pap 5kg': 510,
//     'Top Class Soy Mince': 264,
//     'Shampoo 1 litre': 90,
//     'Soap Bar': 72,
//     'Bananas - loose': 94,
//     'Apples - loose': 72,
//     'Mixed Sweets 5s': 120
// }
// var weekly2 = {
//     Imasi: 900,
//     Bread: 336,
//     'Chakalaka Can': 210,
//     'Gold Dish Vegetable Curry Can': 243,
//     'Fanta 500ml': 149.5,
//     'Coke 500ml': 273,
//     'Cream Soda 500ml': 165,
//     'Iwisa Pap 5kg': 300,
//     'Top Class Soy Mince': 252,
//     'Shampoo 1 litre': 180,
//     'Soap Bar': 30,
//     'Bananas - loose': 56,
//     'Apples - loose': 42,
//     'Mixed Sweets 5s': 147,
//     'Milk 1l': 280,
//     'Heart Chocolates': 700,
//     'Rose (plastic)': 210,
//     'Valentine Cards': 56
// }
// var weekly3 = {
//     Imasi: 625,
//     Bread: 288,
//     'Chakalaka Can': 170,
//     'Gold Dish Vegetable Curry Can': 72,
//     'Fanta 500ml': 91,
//     'Coke 500ml': 117,
//     'Cream Soda 500ml': 90,
//     'Iwisa Pap 5kg': 120,
//     'Top Class Soy Mince': 144,
//     'Shampoo 1 litre': 120,
//     'Soap Bar': 48,
//     'Bananas - loose': 34,
//     'Apples - loose': 50,
//     'Mixed Sweets 5s': 80,
//     'Milk 1l': 280
// }
// var weekly4 = {
//     Imasi: 850,
//     Bread: 396,
//     'Chakalaka Can': 330,
//     'Gold Dish Vegetable Curry Can': 306,
//     'Fanta 500ml': 156,
//     'Coke 500ml': 292.5,
//     'Cream Soda 500ml': 142.5,
//     'Iwisa Pap 5kg': 480,
//     'Top Class Soy Mince': 516,
//     'Shampoo 1 litre': 390,
//     'Soap Bar': 150,
//     'Bananas - loose': 44,
//     'Apples - loose': 64,
//     'Mixed Sweets 5s': 108,
//     'Milk 1l': 430
// };
// /////////////////groupPurchasing.csv\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////////////groupWeeks.csv///////////////////////////////////////
//     it('should show the group data of week2', function() {
//         var listProduct = nelisaProducts.linesInFiles('./data/week2.csv')
//         var products = nelisaProducts.profitable(listProduct);
//         assert.deepEqual(products, weekly2);
//     });
//     it('should show the group data of week1', function() {
//         var listProduct = nelisaProducts.linesInFiles('./data/week1.csv');
//         var products = nelisaProducts.profitable(listProduct);
//         assert.deepEqual(products, weekly1);
//     });
//     it('should show the group data of week3', function() {
//         var listProduct = nelisaProducts.linesInFiles('./data/week3.csv');
//         var products = nelisaProducts.profitable(listProduct);
//         assert.deepEqual(products, weekly3);
//     });
//     it('should show the group data of week4', function() {
//         var listProduct = nelisaProducts.linesInFiles('./data/week4.csv');
//         var products = nelisaProducts.profitable(listProduct);
//         assert.deepEqual(products, weekly4);
//     });
// });
// describe('find the profitable product for weeks',function() {
//     it('should tell the profitable for week1', function() {
//         var products = nelisaPurchases.mostProfit(weekly1,purchase1);
//     //  console.log(products);
//         assert.equal(products,djdj);
//     });
// });
