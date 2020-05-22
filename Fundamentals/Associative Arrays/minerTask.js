function goldMine(input) {
  let obj = {};

  for (let i = 0; i < input.length; i++) {
    let resource = input[i];
    let quantity = input[i + 1];
    let index = input.indexOf(resource);

    if (index % 2 !== 0) {
      quantity = Number(quantity);
    } else {
      if (!obj.hasOwnProperty(resource)) {
        let arr = Number([quantity]);
        obj[resource] = arr;
      } else {
        obj[resource] += Number(quantity);
      }
    }
  }
  let sorted = Object.entries(obj).sort((a, b) => a - b);
  for (let [resource, quantity] of sorted) {
    console.log(`${resource} -> ${quantity}`);
  }
}
