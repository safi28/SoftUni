function order(item, num) {
  let result = (a, b) => a * b;
  let price = 0;
  switch (item) {
    case "water":
      price = 1.0;
      break;
    case "coke":
      price = 1.4;
      break;
    case "coffee":
      price = 1.5;
      break;
    case "snacks":
      price = 2.0;
      break;
  }
  return result(price, num).toFixed(2);
}
