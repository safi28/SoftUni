function equalSums(arr) {
  let ind = -1;
  for (let i = 0; i < arr.length; i++) {
    let left = 0;
    let right = 0;

    for (let j = i - 1; j >= 0; j--) {
      left += arr[j];
    }
    for (let j = i + 1; j < arr.length; j++) {
      right += arr[j];
    }
    if (right === left) {
      ind = i;
    }
  }
  if (ind !== -1) {
    console.log(ind);
  } else {
    console.log("no");
  }
}
