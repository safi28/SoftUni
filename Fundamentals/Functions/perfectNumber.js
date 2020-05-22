function perfectSum(num) {
  let sum = 0;
  let lastDigit = num[num.length];
  let formula = 0;
  let base = 0;
  for (let i = 1; i <= num / 2; i++) {
    formula = (i * (i + 1)) / 2;
    base = Math.floor(Math.sqrt(num * 2));
  }
  if (num % base === 0) {
    sum += num;

    if (sum % num === 0) {
      console.log("We have a perfect number!");
    }
  } else {
    console.log("It's not so perfect.");
  }
}
