function smallestTwoNums(arr) {
  let sorted = arr.sort((a, b) => {
    return a - b;
  });
  let result = sorted.slice(0, 2);
  return result.join(" ");
}
