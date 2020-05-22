function condArr(arr) {
  let sum = 0;
  let condense = [];

  while (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      condense.push(arr[i] + arr[i + 1]);
    }
    arr = condense.slice();
    condense = [];
  }
  console.log(arr[0]);
}
