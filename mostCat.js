var fs = require('fs');
exports.findingCategories = function(weekPurchases){
  var myCategories = {
      'Milk 1l': 'Dairy',
      'Imasi': 'Dairy',
      'Bread': 'Grains',
      'Chakalaka Can': 'Canned',
      'Gold Dish Vegetable Curry Can': 'canned',
      'Fanta 500ml': 'Drinks',
      'Coke 500ml': 'Drinks',
      'Cream Soda 500ml': 'Drinks',
      'Iwisa Pap 5kg': 'Grains',
      'Top Class Soy Mince': 'Grains',
      'Shampoo 1 litre': 'Personal Care',
      'Soap Bar': 'Personal Care',
      'Bananas - loose': 'Fruit',
      'Apples - loose': 'Fruit',
      'Mixed Sweets 5s': 'Sugar-Candy',
      'Heart Chocolates': 'Sugar-Candy',
      'Rose (plastic)': 'Gifts and Cards',
      'Valentine Cards': 'Gifts and Cards'
  };
  var purchasesCategory = {};
  for (var bulk in myCategories) {
      var stock = myCategories[bulk];
      var quantity = weekPurchases[bulk];
      if (!purchasesCategory.hasOwnProperty(stock)) {
          purchasesCategory[stock] = 0;
      }
      purchasesCategory[stock] += quantity;
  }
  // console.log(purchasesCategory);
  var max = 0;
  var mostProfitCategory = {};
  for (var key in purchasesCategory) {
      if (purchasesCategory[key] > max) {
          max = purchasesCategory[key];
          mostProfitCategory = {
            description: 'Most Profit Category',
              category: key,
              profit: max
          }
        }
      }
  // console.log(mostProfitCategory);
    return mostProfitCategory;
  }
