function oddEven(num) {
  num = num.toString();

  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < num.length; i++) {
    let digit = Number(num[i]);

    if (odd(digit)) {
      oddSum += digit;
    }
    if (even(digit)) {
      evenSum += digit;
    }
  }
  function odd(num) {
    return num % 2 !== 0;
  }
  function even(num) {
    return num % 2 === 0;
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
