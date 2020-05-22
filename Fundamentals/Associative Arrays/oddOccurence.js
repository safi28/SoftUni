function oddOccurences(input) {
  let token = input.split(" ");
  let obj = {};

  for (let string of token) {
    string = string.toLowerCase();

    if (!obj.hasOwnProperty(string)) {
      obj[string] = 1;
    } else {
      obj[string]++;
    }
  }
  let output = [];
  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      output.push(key);
    }
  }
  console.log(output.join(" "));
}
