function magicSum(arr, magiccSum) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let next = arr[j];

      if (current + next === magiccSum) {
        console.log(`${current} ${next}`);
      }
    }
  }
}
