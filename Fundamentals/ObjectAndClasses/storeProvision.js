function solve(currentStock, orderedProducts) {
  let products = {};

  for (let i = 0; i < currentStock.length; i += 2) {
    let productName = currentStock[i];

    let productQuantity = Number(currentStock[i + 1]);

    products[productName] = productQuantity;
  }

  for (let i = 0; i < orderedProducts.length; i += 2) {
    let productName = orderedProducts[i];

    let productQuantity = Number(orderedProducts[i + 1]);

    if (products.hasOwnProperty(productName)) {
      products[productName] += productQuantity;
    } else {
      products[productName] = productQuantity;
    }
  }

  for (let key in products) {
    console.log(`${key} -> ${products[key]}`);
  }
}
