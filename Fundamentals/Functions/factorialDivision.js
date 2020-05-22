function factorialOfNum(first, second) {
  function ofFirst() {
    let mult = 1;
    for (let i = first; i > 1; i--) {
      mult *= i;
    }
    return mult;
  }

  function factorialOfNumSecond() {
    let seconddof = 1;
    for (let i = second; i > 1; i--) {
      seconddof *= i;
    }
    return seconddof;
  }
  function divide() {
    let result = ofFirst() / factorialOfNumSecond();
    return result;
  }
  console.log(divide().toFixed(2));
}
