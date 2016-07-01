var fs = require('fs');

exports.linesInFiles = function(filePath) {
    var filesInFolder = fs.readFileSync(filePath, 'utf-8');
    var lines = filesInFolder
        .split("\n")
        .slice(1).filter(Boolean);

    var newArray = [];
    var product = lines.forEach(function(line) {
        var stock = line.split(',');
        newArray.push(stock);
    });
    var productList = newArray.map(function(set) {
        return {
            item: set [2],
            quantity: Number(set[3]),
            salesPrice: Number(set[4].replace('R',''))
        }
    });
    // console.log(productList);
    return productList;
};
exports.groupingData = function(productList) {
    var productTotal = {};
    productList.forEach(function(list) {
        var item = list.item;
        var quantity = list.quantity;
        if (productTotal[item] === undefined) {
            productTotal[item] = 0;
        };
        productTotal[item] = productTotal[item] + Number(quantity);
    });
    //  console.log(productTotal);
    return productTotal;
};

exports.mostPopular = function(productTotal) {
    var most = 0;
    var mostProduct = {};
    for (var key in productTotal) {
        if (productTotal[key] > most) {
            most = productTotal[key];
            mostProduct = {
                item: key,
                qty: most
            }
        }

    }
    // console.log(mostProduct);
    return mostProduct;
};

exports.leastPopular = function(productTotal) {

    var least = 100;
    var leastProduct = {};
    for (var key in productTotal) {
        if (productTotal[key] < least) {
            least = productTotal[key];
            leastProduct = {
                item: key,
                qty: least
            }
        }

    }
    return leastProduct;
}

exports.category = function(productTotal) {
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

    var productCategory = {};
    for (var stock in myCategories) {
        var food = myCategories[stock];
        var quantity = productTotal[stock];
        // console.log(productTotal[stock]);
        if (!productCategory.hasOwnProperty(food)) {
            productCategory[food] = 0;
        }
        productCategory[food] += quantity;
    }
    // console.log(productCategory);

    var max = 0;
    var mostCategory = {};
    for (var key in productCategory) {
        if (productCategory[key] > max) {
            max = productCategory[key];
            mostCategory = {
                category: key,
                quantity: max
            }
        }
    }
    // console.log(mostCategory);
      return mostCategory;
    }
exports.least = function(productCategory){
  var min = 150;
  var leastCategory = {};
  for (var key in productCategory) {
    if (productCategory[key] < min) {
    min = productCategory[key];
    leastCategory = {
      category: key,
      quantity: min
    }
    }
  }
  // console.log(leastCategory);
  return leastCategory;
};
