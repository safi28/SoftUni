function solve(input) {
  input.pop();
  let totalSum = 0;
  console.log("Bought furniture:");

  input.forEach((element) => {
    let pattern = />>(?<furniture>[\w]+)<<(?<price>[\d]+\.?\d*)!(?<quantity>[\d]+)/g;
    let result = pattern.exec(element);

    if (result) {
      console.log(result.groups.furniture);
      let itemPrice = result.groups.price;
      let itemQuantity = result.groups.quantity;
      let sum = itemPrice * itemQuantity;
      totalSum += sum;
    }
  });
  console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
