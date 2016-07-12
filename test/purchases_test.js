var nelisaPurchases = require('../nelisaPurchases');
var assert = require('assert');
var nelisaProducts = require('../nelisaProducts');

var weekly1 = new Date('7-Feb');
var weekly2 = new Date('14-Feb');
var weekly3 = new Date('21-Feb');
var weekly4 = new Date('1-Mar');
var weekly0 = new Date('28-Jan');

describe('filter the data', function() {
    it('should filter the data for purchases file', function() {
        var inputWeek = nelisaPurchases.sales('./data/purchases.csv');
        assert.equal(inputWeek.length, 153);
    });
    it('should split the purchases by week for week1', function() {
        var inputWeek = nelisaPurchases.sales('./data/purchases.csv')
        var inputWeek1 = nelisaPurchases.splittingPurchases(inputWeek, weekly1, weekly0);
        assert.deepEqual(inputWeek1, splitInput1);
    })
    it('should split the purchases by week for week2', function() {
        var inputWeek = nelisaPurchases.sales('./data/purchases.csv')
        var inputWeek1 = nelisaPurchases.splittingPurchases(inputWeek, weekly2, weekly1);
        assert.deepEqual(inputWeek1, splitInput2);
    })
    it('split the purchases by week for week3', function() {
        var inputWeek = nelisaPurchases.sales('./data/purchases.csv')
        var purchases = nelisaPurchases.splittingPurchases(inputWeek, weekly3, weekly2);
        assert.deepEqual(purchases, splitInput3);
    });
    it('split the purchases by week for week4', function() {
        var inputWeek = nelisaPurchases.sales('./data/purchases.csv')
        var purchases = nelisaPurchases.splittingPurchases(inputWeek, weekly4, weekly3);
        assert.deepEqual(purchases, splitInput4);
    })
});
var splitInput1 = [{
    Shop: 'HomeMade',
    dates: '02-Feb',
    Items: 'Shampoo 1 litre',
    Cost: 20
}, {
    Shop: 'HomeMade',
    dates: '02-Feb',
    Items: 'Soap Bar',
    Cost: 3
}, {
    Shop: 'Epping Market',
    dates: '03-Feb',
    Items: 'Bananas - loose',
    Cost: 1
}, {
    Shop: 'Epping Market',
    dates: '03-Feb',
    Items: 'Apples - loose',
    Cost: 1.5
}, {
    Shop: 'Epping Market',
    dates: '03-Feb',
    Items: 'Mixed Sweets 5s',
    Cost: 3
}, {
    Shop: 'HomeMade',
    dates: '04-Feb',
    Items: 'Shampoo 1 litre',
    Cost: 20
}, {
    Shop: 'HomeMade',
    dates: '04-Feb',
    Items: 'Soap Bar',
    Cost: 3
}, {
    Shop: 'Joe Spaza Shop',
    dates: '04-Feb',
    Items: 'Bread',
    Cost: 11
}, {
    Shop: 'Joe Spaza Shop',
    dates: '04-Feb',
    Items: 'Imasi',
    Cost: 24
}, {
    Shop: 'Epping Market',
    dates: '06-Feb',
    Items: 'Bananas - loose',
    Cost: 1
}, {
    Shop: 'Epping Market',
    dates: '06-Feb',
    Items: 'Apples - loose',
    Cost: 1.5
}, {
    Shop: 'Epping Market',
    dates: '06-Feb',
    Items: 'Mixed Sweets 5s',
    Cost: 3
}, {
    Shop: 'HomeMade',
    dates: '06-Feb',
    Items: 'Soap Bar',
    Cost: 3
}, {
    Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Bread',
    Cost: 9
}, {
    Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Chakalaka Can',
    Cost: 7
}, {
    Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Coke 500ml',
    Cost: 3.5
}, {
    Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Cream Soda 500ml',
    Cost: 4.5
}, {
    Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Fanta 500ml',
    Cost: 4.5
}, {
    Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    Cost: 5
}, {
    Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Imasi',
    Cost: 17
}, {
    Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Iwisa Pap 5kg',
    Cost: 20
}, {
    Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Milk 1l',
    Cost: 7
}, {
    Shop: 'Makro',
    dates: '6-Feb',
    Items: 'Top Class Soy Mince',
    Cost: 8
}];
var splitInput2 = [{
    Shop: 'ChinaTown',
    dates: '09-Feb',
    Items: 'Rose (plastic)',
    Cost: 10
}, {
    Shop: 'Joe Spaza Shop',
    dates: '09-Feb',
    Items: 'Milk 1l',
    Cost: 9.5
}, {
    Shop: 'Epping Market',
    dates: '10-Feb',
    Items: 'Bananas - loose',
    Cost: 1
}, {
    Shop: 'Epping Market',
    dates: '10-Feb',
    Items: 'Apples - loose',
    Cost: 1.5
}, {
    Shop: 'Epping Market',
    dates: '10-Feb',
    Items: 'Mixed Sweets 5s',
    Cost: 3
}, {
    Shop: 'Makro',
    dates: '10-Feb',
    Items: 'Bread',
    Cost: 9
}, {
    Shop: 'Makro',
    dates: '10-Feb',
    Items: 'Chakalaka Can',
    Cost: 7
}, {
    Shop: 'Makro',
    dates: '10-Feb',
    Items: 'Coke 500ml',
    Cost: 3.5
}, {
    Shop: 'Makro',
    dates: '10-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    Cost: 5
}, {
    Shop: 'Makro',
    dates: '10-Feb',
    Items: 'Heart Chocolates',
    Cost: 25
}, {
    Shop: 'Makro',
    dates: '10-Feb',
    Items: 'Imasi',
    Cost: 17
}, {
    Shop: 'Makro',
    dates: '10-Feb',
    Items: 'Iwisa Pap 5kg',
    Cost: 20
}, {
    Shop: 'Makro',
    dates: '10-Feb',
    Items: 'Milk 1l',
    Cost: 7
}, {
    Shop: 'Makro',
    dates: '10-Feb',
    Items: 'Top Class Soy Mince',
    Cost: 8
}, {
    Shop: 'HomeMade',
    dates: '11-Feb',
    Items: 'Shampoo 1 litre',
    Cost: 20
}, {
    Shop: 'HomeMade',
    dates: '11-Feb',
    Items: 'Valentine Cards',
    Cost: 2
}, {
    Shop: 'Joe Spaza Shop',
    dates: '12-Feb',
    Items: 'Milk 1l',
    Cost: 9.5
}, {
    Shop: 'Epping Market',
    dates: '13-Feb',
    Items: 'Bananas - loose',
    Cost: 1
}, {
    Shop: 'Epping Market',
    dates: '13-Feb',
    Items: 'Mixed Sweets 5s',
    Cost: 3
}, {
    Shop: 'HomeMade',
    dates: '13-Feb',
    Items: 'Shampoo 1 litre',
    Cost: 20
}, {
    Shop: 'HomeMade',
    dates: '13-Feb',
    Items: 'Soap Bar',
    Cost: 3
}, {
    Shop: 'Joe Spaza Shop',
    dates: '13-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    Cost: 8.5
}, {
    Shop: 'Makro',
    dates: '13-Feb',
    Items: 'Bread',
    Cost: 9
}, {
    Shop: 'Makro',
    dates: '13-Feb',
    Items: 'Coke 500ml',
    Cost: 3.5
}, {
    Shop: 'Makro',
    dates: '13-Feb',
    Items: 'Fanta 500ml',
    Cost: 4.5
}, {
    Shop: 'Makro',
    dates: '13-Feb',
    Items: 'Imasi',
    Cost: 17
}, {
    Shop: 'Makro',
    dates: '13-Feb',
    Items: 'Milk 1l',
    Cost: 7
}, {
    Shop: 'Makro',
    dates: '13-Feb',
    Items: 'Top Class Soy Mince',
    Cost: 8
}, {
    Shop: 'HomeMade',
    dates: '14-Feb',
    Items: 'Shampoo 1 litre',
    Cost: 20
}, {
    Shop: 'Joe Spaza Shop',
    dates: '14-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    Cost: 8.5
}]
var splitInput3 = [{
    Shop: 'Joe Spaza Shop',
    dates: '16-Feb',
    Items: 'Chakalaka Can',
    Cost: 8.5
}, {
    Shop: 'Joe Spaza Shop',
    dates: '16-Feb',
    Items: 'Cream Soda 500ml',
    Cost: 7.5
}, {
    Shop: 'Joe Spaza Shop',
    dates: '16-Feb',
    Items: 'Fanta 500ml',
    Cost: 6.5
}, {
    Shop: 'Joe Spaza Shop',
    dates: '16-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    Cost: 8.5
}, {
    Shop: 'Joe Spaza Shop',
    dates: '16-Feb',
    Items: 'Iwisa Pap 5kg',
    Cost: 30
}, {
    Shop: 'Joe Spaza Shop',
    dates: '16-Feb',
    Items: 'Milk 1l',
    Cost: 9.5
}, {
    Shop: 'Epping Market',
    dates: '17-Feb',
    Items: 'Apples - loose',
    Cost: 1.5
}, {
    Shop: 'Epping Market',
    dates: '17-Feb',
    Items: 'Mixed Sweets 5s',
    Cost: 3
}, {
    Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Bread',
    Cost: 9
}, {
    Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Chakalaka Can',
    Cost: 7
}, {
    Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Coke 500ml',
    Cost: 3.5
}, {
    Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Cream Soda 500ml',
    Cost: 4.5
}, {
    Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Fanta 500ml',
    Cost: 4.5
}, {
    Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    Cost: 5
}, {
    Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Imasi',
    Cost: 17
}, {
    Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Iwisa Pap 5kg',
    Cost: 20
}, {
    Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Milk 1l',
    Cost: 7
}, {
    Shop: 'Makro',
    dates: '17-Feb',
    Items: 'Top Class Soy Mince',
    Cost: 8
}, {
    Shop: 'HomeMade',
    dates: '18-Feb',
    Items: 'Shampoo 1 litre',
    Cost: 20
}, {
    Shop: 'HomeMade',
    dates: '18-Feb',
    Items: 'Soap Bar',
    Cost: 3
}, {
    Shop: 'HomeMade',
    dates: '19-Feb',
    Items: 'Shampoo 1 litre',
    Cost: 20
}, {
    Shop: 'Joe Spaza Shop',
    dates: '19-Feb',
    Items: 'Milk 1l',
    Cost: 9.5
}, {
    Shop: 'Epping Market',
    dates: '20-Feb',
    Items: 'Bananas - loose',
    Cost: 1
}, {
    Shop: 'Epping Market',
    dates: '20-Feb',
    Items: 'Apples - loose',
    Cost: 1.5
}, {
    Shop: 'Epping Market',
    dates: '20-Feb',
    Items: 'Mixed Sweets 5s',
    Cost: 3
}, {
    Shop: 'HomeMade',
    dates: '20-Feb',
    Items: 'Shampoo 1 litre',
    Cost: 20
}, {
    Shop: 'HomeMade',
    dates: '20-Feb',
    Items: 'Soap Bar',
    Cost: 3
}, {
    Shop: 'Makro',
    dates: '20-Feb',
    Items: 'Bread',
    Cost: 9
}, {
    Shop: 'Makro',
    dates: '20-Feb',
    Items: 'Imasi',
    Cost: 17
}, {
    Shop: 'Makro',
    dates: '20-Feb',
    Items: 'Iwisa Pap 5kg',
    Cost: 20
}, {
    Shop: 'Makro',
    dates: '20-Feb',
    Items: 'Milk 1l',
    Cost: 7
}, {
    Shop: 'Makro',
    dates: '20-Feb',
    Items: 'Top Class Soy Mince',
    Cost: 8
}]
var splitInput4 = [{
    Shop: 'Joe Spaza Shop',
    dates: '23-Feb',
    Items: 'Chakalaka Can',
    Cost: 9
}, {
    Shop: 'Epping Market',
    dates: '24-Feb',
    Items: 'Bananas - loose',
    Cost: 1
}, {
    Shop: 'Epping Market',
    dates: '24-Feb',
    Items: 'Apples - loose',
    Cost: 1.5
}, {
    Shop: 'Epping Market',
    dates: '24-Feb',
    Items: 'Mixed Sweets 5s',
    Cost: 3
}, {
    Shop: 'Makro',
    dates: '24-Feb',
    Items: 'Bread',
    Cost: 9
}, {
    Shop: 'Makro',
    dates: '24-Feb',
    Items: 'Chakalaka Can',
    Cost: 7
}, {
    Shop: 'Makro',
    dates: '24-Feb',
    Items: 'Coke 500ml',
    Cost: 3.5
}, {
    Shop: 'Makro',
    dates: '24-Feb',
    Items: 'Cream Soda 500ml',
    Cost: 4.5
}, {
    Shop: 'Makro',
    dates: '24-Feb',
    Items: 'Fanta 500ml',
    Cost: 4.5
}, {
    Shop: 'Makro',
    dates: '24-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    Cost: 5
}, {
    Shop: 'Makro',
    dates: '24-Feb',
    Items: 'Imasi',
    Cost: 17
}, {
    Shop: 'Makro',
    dates: '24-Feb',
    Items: 'Milk 1l',
    Cost: 7
}, {
    Shop: 'Makro',
    dates: '24-Feb',
    Items: 'Top Class Soy Mince',
    Cost: 8
}, {
    Shop: 'HomeMade',
    dates: '25-Feb',
    Items: 'Soap Bar',
    Cost: 3
}, {
    Shop: 'HomeMade',
    dates: '26-Feb',
    Items: 'Shampoo 1 litre',
    Cost: 20
}, {
    Shop: 'HomeMade',
    dates: '26-Feb',
    Items: 'Soap Bar',
    Cost: 3
}, {
    Shop: 'Joe Spaza Shop',
    dates: '26-Feb',
    Items: 'Bread',
    Cost: 11
}, {
    Shop: 'Joe Spaza Shop',
    dates: '26-Feb',
    Items: 'Fanta 500ml',
    Cost: 6.5
}, {
    Shop: 'Joe Spaza Shop',
    dates: '26-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    Cost: 8.5
}, {
    Shop: 'Joe Spaza Shop',
    dates: '26-Feb',
    Items: 'Iwisa Pap 5kg',
    Cost: 30
}, {
    Shop: 'Epping Market',
    dates: '27-Feb',
    Items: 'Bananas - loose',
    Cost: 1
}, {
    Shop: 'Epping Market',
    dates: '27-Feb',
    Items: 'Apples - loose',
    Cost: 1.5
}, {
    Shop: 'HomeMade',
    dates: '27-Feb',
    Items: 'Shampoo 1 litre',
    Cost: 20
}, {
    Shop: 'HomeMade',
    dates: '27-Feb',
    Items: 'Soap Bar',
    Cost: 3
}, {
    Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Bread',
    Cost: 9
}, {
    Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Chakalaka Can',
    Cost: 7
}, {
    Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Coke 500ml',
    Cost: 3.5
}, {
    Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Cream Soda 500ml',
    Cost: 4.5
}, {
    Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Fanta 500ml',
    Cost: 4.5
}, {
    Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    Cost: 5
}, {
    Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Imasi',
    Cost: 17
}, {
    Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Iwisa Pap 5kg',
    Cost: 20
}, {
    Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Milk 1l',
    Cost: 7
}, {
    Shop: 'Makro',
    dates: '27-Feb',
    Items: 'Top Class Soy Mince',
    Cost: 8
}, {
    Shop: 'HomeMade',
    dates: '28-Feb',
    Items: 'Shampoo 1 litre',
    Cost: 20
}, {
    Shop: 'HomeMade',
    dates: '28-Feb',
    Items: 'Soap Bar',
    Cost: 3
}, {
    Shop: 'Joe Spaza Shop',
    dates: '28-Feb',
    Items: 'Chakalaka Can',
    Cost: 8.5
}, {
    Shop: 'Joe Spaza Shop',
    dates: '28-Feb',
    Items: 'Gold Dish Vegetable Curry Can',
    Cost: 8.5
}, {
    Shop: 'Joe Spaza Shop',
    dates: '28-Feb',
    Items: 'Top Class Soy Mince',
    Cost: 11
}, {
    Shop: 'HomeMade',
    dates: '01-Mar',
    Items: 'Shampoo 1 litre',
    Cost: 20
}, {
    Shop: 'HomeMade',
    dates: '01-Mar',
    Items: 'Soap Bar',
    Cost: 3
}, {
    Shop: 'Joe Spaza Shop',
    dates: '01-Mar',
    Items: 'Chakalaka Can',
    Cost: 8.5
}, {
    Shop: 'Joe Spaza Shop',
    dates: '01-Mar',
    Items: 'Gold Dish Vegetable Curry Can',
    Cost: 8.5
}, {
    Shop: 'Joe Spaza Shop',
    dates: '01-Mar',
    Items: 'Top Class Soy Mince',
    Cost: 11
}]

describe('grouping the purchases', function() {
    it('group data purchases for week1', function() {
        var inputWeek = nelisaPurchases.groupPurchasing(splitInput1);
        assert.deepEqual(inputWeek, purchases1);
    });
    it('group data purchases for week2', function() {
        var purchases = nelisaPurchases.groupPurchasing(splitInput2);
        assert.deepEqual(purchases, purchases2);
    });
    it('group data purchases for week3', function() {
        var purchases = nelisaPurchases.groupPurchasing(splitInput3);
        assert.deepEqual(purchases, purchases3);
    });
    it('group data purchases for week4', function() {
        var purchases = nelisaPurchases.groupPurchasing(splitInput4);
        assert.deepEqual(purchases, purchases4);
    });
});
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
