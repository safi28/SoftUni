function rotatedArr(arr, n) {
  n %= arr.length;
  while (n > 0) {
    let first = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
    n--;
  }
  console.log(arr.join(" "));
}
