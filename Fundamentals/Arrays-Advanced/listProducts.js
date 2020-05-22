function listOfProducts(arr) {
  let products = arr.sort();

  for (let i = 0; i < products.length; i++) {
    let result = products[i];
    console.log(`${i + 1}.${result}`);
  }
}
