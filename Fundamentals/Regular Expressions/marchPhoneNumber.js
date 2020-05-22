function solve(input) {
  let pattern = /\+359([:? -])2\1\d{3}\1\d{4}\b/g;
  valid = [];
  let validNums = null;

  while ((validNums = pattern.exec(input)) !== null) {
    valid.push(validNums[0]);
  }

  console.log(valid.join(", "));
}
