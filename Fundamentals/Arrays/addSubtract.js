function add(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    if (current % 2 === 0) {
      newArr.push(current + i);
    } else {
      newArr.push(current - i);
    }
  }
  console.log(newArr);
  let originalSum = 0;
  for (let value of arr) {
    originalSum += value;
  }
  let modifiedSum = 0;
  for (let val of newArr) {
    modifiedSum += val;
  }
  console.log(originalSum);
  console.log(modifiedSum);
}
