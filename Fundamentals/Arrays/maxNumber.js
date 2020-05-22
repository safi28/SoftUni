function maxNum(arr) {
  let topInteger = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let isBig = true;
    for (let j = i + 1; j < arr.length; j++) {
      let next = arr[j];

      if (current <= next) {
        isBig = false;
        break;
      }
    }
    if (isBig) {
      topInteger.push(current);
    }
  }
  console.log(topInteger.join(" "));
}
