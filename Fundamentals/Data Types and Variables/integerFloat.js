function order(first, second, third) {
  let sum = first + second + third;
  let result = sum % 1 === 0 ? `${sum} - Integer` : `${sum} - Float`;

  console.log(result);
}
