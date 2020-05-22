function negativeAndPositive(arr) {
  let arrayy = [];
  for (let num of arr) {
    if (num < 0) {
      arrayy.unshift(num);
    } else {
      arrayy.push(num);
    }
  }
  console.log(arrayy.join("\n"));
}
