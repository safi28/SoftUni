function solve(nun) {
  for (let num of nun) {
    console.log(palindrome(num));
  }

  function palindrome(input) {
    let numstr = input.toString();

    for (let i = 0; i < numstr.length / 2; i++) {
      if (numstr[i] !== numstr[numstr.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
}
