function calculator(firstNum, secondNum, operation) {
  let multiply = (a, b) => a * b;
  let divide = (a, b) => a / b;
  let add = (a, b) => a + b;
  let substract = (a, b) => a - b;
  let result = 0;

  switch (operation) {
    case "multiply":
      result = multiply(firstNum, secondNum);
      break;
    case "divide":
      result = divide(firstNum, secondNum);
      break;
    case "add":
      result = add(firstNum, secondNum);
      break;
    case "subtract":
      result = substract(firstNum, secondNum);
      break;
  }
  return result;
}
