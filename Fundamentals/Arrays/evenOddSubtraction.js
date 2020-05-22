function diffEvOddArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }

  let even = 0;
  let odd = 0;

  for (let sum of arr) {
    if (sum % 2 === 0) {
      even += sum;
    } else {
      odd += sum;
    }
  }
  let diff = even - odd;
  console.log(diff);
}
