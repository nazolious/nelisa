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
var weekly1 = ['1-Feb','2-Feb','3-Feb','4-Feb','5-Feb','6-Feb','7-Feb'];
var weekly2 = ['8-Feb','9-Feb','10-Feb','11-Feb','12-Feb','13-Feb','14-Feb'];
var weekly3 = ['15-Feb','16-Feb','17-Feb','18-Feb','19-Feb','20-Feb','21-Feb'];
var weekly4 =['22-Feb','23-Feb','24-Feb','25-Feb','26-Feb','27-Feb','28-Feb','1-Mar'];

describe('show the data for purchase', function() {
    it('should show the length of purchases', function() {
        var products = nelisaPurchases.sales('./data/purchases.csv');
        assert.equal(products.length, 153);
    });
    it('split the purchases by week for week1',function(){
      var products = nelisaPurchases.purchasesWeeks('./data/purchases.csv',weekly1);
      assert.equal(products,46);
    });
    });

// var purchase1 = {
//     'Chakalaka Can': 676,
//     'Coke 500ml': 598.5,
//     'Cream Soda 500ml': 357,
//     'Fanta 500ml': 433.5,
//     'Gold Dish Vegetable Curry Can': 479,
//     Imasi: 2238,
//     'Iwisa Pap 5kg': 1020,
//     'Milk 1l': 1061.5,
//     'Top Class Soy Mince': 808,
//     'Bananas - loose': 72,
//     'Apples - loose': 795,
//     'Mixed Sweets 5s': 2070,
//     'Shampoo 1 litre': 520,
//     'Soap Bar': 156,
//     Bread: 1270,
//     'Rose (plastic)': 200,
//     'Heart Chocolates': 500,
//     'Valentine Cards': 40
// };
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
