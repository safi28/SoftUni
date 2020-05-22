function solve(input) {
  let upperCase = (symbol) => {
    return symbol.toUpperCase() === symbol;
  };

  let lastDigit = input[input.length - 1];
  let output = "";

  for (let i = input.length - 1 - 1; i >= 0; i--) {
    if (upperCase[input[i + 1]]) {
      output += lastDigit;
      lastDigit = input[i];
    } else {
      lastDigit += input[i];
    }
  }
  output += lastDigit;
  let str = "";
  for (let i = 0; i < output.length / 2; i++) {
    str += output[i];
  }
  let index = str.lastIndexOf("");
  let otherHalf = output.substr(index);

  console.log(otherHalf);
  console.log(str);
}
