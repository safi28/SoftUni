function order(one, two, three) {
  let multiply = (a, b, c) => a * b * c;
  let sum = 0;
  for (let i = 0; i < order.length; i++) {
    let arr = order[i];
    arr = multiply(one, two, three);
    sum += arr;
  }
  if (sum >= 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}
