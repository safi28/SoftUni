function solve() {
  let input = document.getElementById("input").value;
  let sum = calculateSum(input);
  input = splitInput(input, sum);
  let result = splitGroups(input);
  showResult(result);

  function showResult(result) {
    document.getElementById("resultOutput").innerHTML = result;
  }
  function splitGroups(text) {
    let match = text.match(/.{1,8}/g);
    let result = "";

    match.forEach(element => {
      let ascii = String.fromCharCode(binaryToD(element));
      const rg = /[a-zA-Z ]+/gm;

      if (rg.exec(ascii)) {
        result += ascii;
      }
    });
    return result;
  }
  function binaryToD(el) {
    return parseInt(el, 2);
  }
  function splitInput(input, sum) {
    let result = input.substring(sum);
    result = result.substring(0, result.length - sum);
    return result;
  }
  function calculateSum(input) {
    while (input.toString().length > 1) {
      input = spreadSum(input);
    }
    return input;
  }
  function spreadSum(input) {
    return Array.from(input.toString())
      .map(Number)
      .reduce((a, b) => a + b,0);
  }
}
