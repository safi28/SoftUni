function solve(input) {
  let totalSum = 0;
  input.forEach((element) => {
    let pattern = /%(?<name>[A-Z][a-z]+)\b%<(?<product>[\w]+[\w]*)>([^\.\|\%\$]*)\|(?<integer>[\d]+)\|\3(?<second>[\d]+\.?[\d]*)\$/g;
    let param = pattern.exec(element);

    if (param) {
      let customer = param.groups.name;
      let productItem = param.groups.product;
      let quantity = Number(param.groups.integer);
      let price = Number(param.groups.second);

      let sum = quantity * price;
      totalSum += sum;
      console.log(`${customer}: ${productItem} - ${sum.toFixed(2)}`);
    }
  });
  console.log(`Total income: ${totalSum.toFixed(2)}`);
}
