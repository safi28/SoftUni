function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let lowerEl = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = lowerEl;
  }
  console.log(arr.join(" "));
}
