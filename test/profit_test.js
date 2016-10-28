var nelisaPurchases = require('../nelisaPurchases');
var assert = require('assert');
var profitable = require('../profitable');
var nelisaProducts = require('../nelisaProducts');

// ///////////////////////////groupWeeks.csv///////////////////////////////////////
describe('group data for week', function() {
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
var salesWeek1 = {
    'Milk 1l': 390,
    'Imasi': 750,
    'Bread': 540,
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
    'Imasi': 900,
    'Bread': 336,
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
var productList = nelisaProducts.linesInFiles('./data/week1.csv');
var productList1 = nelisaProducts.linesInFiles('./data/week2.csv');
var productList2 = nelisaProducts.linesInFiles('./data/week3.csv');
var productList3 = nelisaProducts.linesInFiles('./data/week4.csv');

var purchases1 = {
    'Shampoo 1 litre': 20,
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
describe('quantitySold * Cost', function() {
    it('should tell quantitySold * sold for week1', function() {
        var profit = nelisaPurchases.qtySoldCost(purchases1, productList);
        assert.deepEqual(profit, boughtforWeek1);
    })
    it('should tell quantitySold * sold for week2', function() {
        var profit = nelisaPurchases.qtySoldCost(purchases2, productList1);
        assert.deepEqual(profit, boughtforWeek2);
    })
    it('should tell quantitySold * sold for week3', function() {
        var profit = nelisaPurchases.qtySoldCost(purchases3, productList2);
        assert.deepEqual(profit, boughtforWeek3);
    })
    it('should tell quantitySold * sold for week4', function() {
        var profit = nelisaPurchases.qtySoldCost(purchases4, productList3);
        assert.deepEqual(profit, boughtforWeek4);
    })
})
var boughtforWeek1 = {
    'Shampoo 1 litre': 60,
    'Soap Bar': 36,
    'Bananas - loose': 47,
    'Apples - loose': 54,
    'Mixed Sweets 5s': 147,
    'Bread': 495,
    'Imasi': 720,
    'Chakalaka Can': 161,
    'Coke 500ml': 189,
    'Cream Soda 500ml': 99,
    'Fanta 500ml': 148.5,
    'Gold Dish Vegetable Curry Can': 85,
    'Iwisa Pap 5kg': 340,
    'Milk 1l': 273,
    'Top Class Soy Mince': 176
}
var boughtforWeek2 = {
    'Rose (plastic)': 140,
    'Milk 1l': 266,
    'Bananas - loose': 28,
    'Apples - loose': 31.5,
    'Mixed Sweets 5s': 162,
    'Bread': 252,
    'Chakalaka Can': 147,
    'Coke 500ml': 147,
    'Gold Dish Vegetable Curry Can': 135,
    'Heart Chocolates': 500,
    'Imasi': 612,
    'Iwisa Pap 5kg': 200,
    'Top Class Soy Mince': 168,
    'Shampoo 1 litre': 120,
    'Valentine Cards': 28,
    'Soap Bar': 15,
    'Fanta 500ml': 103.5
}
var boughtforWeek3 = {
    'Chakalaka Can': 144.5,
    'Cream Soda 500ml': 90,
    'Fanta 500ml': 91,
    'Gold Dish Vegetable Curry Can': 68,
    'Iwisa Pap 5kg': 120,
    'Milk 1l': 266,
    'Apples - loose': 37.5,
    'Mixed Sweets 5s': 87,
    'Bread': 216,
    'Coke 500ml': 63,
    'Imasi': 425,
    'Top Class Soy Mince': 96,
    'Shampoo 1 litre': 80,
    'Soap Bar': 24,
    'Bananas - loose': 17
}
var boughtforWeek4 = {
        'Chakalaka Can': 297,
        'Bananas - loose': 22,
        'Apples - loose': 48,
        'Mixed Sweets 5s': 120,
        'Bread': 297,
        'Coke 500ml': 157.5,
        'Cream Soda 500ml': 85.5,
        'Fanta 500ml': 108,
        'Gold Dish Vegetable Curry Can': 170,
        'Imasi': 578,
        'Milk 1l': 301,
        'Top Class Soy Mince': 344,
        'Soap Bar': 75,
        'Shampoo 1 litre': 260,
        'Iwisa Pap 5kg': 480
    }
    // // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var salesPurchases1 = {
    'Milk 1l': 117,
    'Imasi': 30,
    'Bread': 45,
    'Chakalaka Can': 69,
    'Gold Dish Vegetable Curry Can': 68,
    'Fanta 500ml': 66,
    'Coke 500ml': 162,
    'Cream Soda 500ml': 66,
    'Iwisa Pap 5kg': 170,
    'Top Class Soy Mince': 88,
    'Shampoo 1 litre': 30,
    'Soap Bar': 36,
    'Bananas - loose': 47,
    'Apples - loose': 18,
    'Mixed Sweets 5s': -27
}
var salesPurchases2 = {
    'Imasi': 288,
    'Bread': 84,
    'Chakalaka Can': 63,
    'Gold Dish Vegetable Curry Can': 108,
    'Fanta 500ml': 46,
    'Coke 500ml': 126,
<<<<<<< HEAD
    // 'Cream Soda 500ml': NaN,
=======
    'Cream Soda 500ml': 165,
>>>>>>> 4a181d5ddd635b3f2c945798348a48cc60229b94
    'Iwisa Pap 5kg': 100,
    'Top Class Soy Mince': 84,
    'Shampoo 1 litre': 60,
    'Soap Bar': 15,
    'Bananas - loose': 28,
    'Apples - loose': 10.5,
    'Mixed Sweets 5s': -15,
    'Milk 1l': 14,
    'Heart Chocolates': 200,
    'Rose (plastic)': 70,
    'Valentine Cards': 28
}
var salesPurchases3 = {
    'Imasi': 200,
    'Bread': 72,
    'Chakalaka Can': 25.5,
    'Gold Dish Vegetable Curry Can': 4,
    'Fanta 500ml': 0,
    'Coke 500ml': 54,
    'Cream Soda 500ml': 0,
    'Iwisa Pap 5kg': 0,
    'Top Class Soy Mince': 48,
    'Shampoo 1 litre': 40,
    'Soap Bar': 24,
    'Bananas - loose': 17,
    'Apples - loose': 12.5,
    'Mixed Sweets 5s': -7,
    'Milk 1l': 14
}
var salesPurchases4 = {
    'Imasi': 272,
    'Bread': 99,
    'Chakalaka Can': 33,
    'Gold Dish Vegetable Curry Can': 136,
    'Fanta 500ml': 48,
    'Coke 500ml': 135,
    'Cream Soda 500ml': 57,
    'Iwisa Pap 5kg': 0,
    'Top Class Soy Mince': 172,
    'Shampoo 1 litre': 130,
    'Soap Bar': 75,
    'Bananas - loose': 22,
    'Apples - loose': 16,
    'Mixed Sweets 5s': -12,
    'Milk 1l': 129
}
describe('find the profit for each week', function() {
    it('find the profit for week1', function() {
        var profit = profitable.findingProfit(salesWeek1, boughtforWeek1);;
        assert.deepEqual(profit, salesPurchases1);
    });
    it('find the profit for week2', function() {
        var profit = profitable.findingProfit(salesWeek2, boughtforWeek2);
        assert.deepEqual(profit, salesPurchases2);
    });
    it('find the profit for week3', function() {
        var profit = profitable.findingProfit(salesWeek3, boughtforWeek3);
        assert.deepEqual(profit, salesPurchases3);
    });
    it('find the profit for week4', function() {
        var profit = profitable.findingProfit(salesWeek4, boughtforWeek4);
        assert.deepEqual(profit, salesPurchases4);
    });
});
describe('the most profitable product for each week', function() {
    it('the most profitable product for week1', function() {
        var profit = profitable.mostProfit(salesPurchases1);
        assert.deepEqual(profit, {
          description: 'Most Profit Product',
            Item: 'Iwisa Pap 5kg',
            profit: 170
        });
    })
    it('the most profitable product for week2', function() {
        var profit = profitable.mostProfit(salesPurchases2);
        assert.deepEqual(profit, {
          description: 'Most Profit Product',
            Item: 'Imasi',
            profit: 288
        });
    })
    it('the most profitable product for week3', function() {
        var profit = profitable.mostProfit(salesPurchases3);
        assert.deepEqual(profit, {
          description: 'Most Profit Product',
            Item: 'Imasi',
            profit: 200
        });
    })
    it('the most profitable product for week4', function() {
        var profit = profitable.mostProfit(salesPurchases4);
        assert.deepEqual(profit, {
          description: 'Most Profit Product',
            Item: 'Imasi',
            profit: 272
        });
    })
})
