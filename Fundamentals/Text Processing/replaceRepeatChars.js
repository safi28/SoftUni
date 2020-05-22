function solve(input) {
  let arr = [];

  for (let i = 0; i < input.length; i++) {
    let current = input[i];
    let previous = input[i - 1];

    if (previous !== current) {
      arr.push(current);
    }
  }
  console.log(arr.join(""));
}
