function distinctArr(arr) {
  let distinct = [];

  for (let i = 0; i < arr.length; i++) {
    let indexOffEl = arr.indexOf(arr[i]);

    if (i === indexOffEl) {
      distinct.push(arr[i]);
    }
  }
  console.log(distinct.join(" "));
}
