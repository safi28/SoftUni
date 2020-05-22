function commonElements(firstArr, secondArr) {
  for (let i = 0; i < firstArr.length; i++) {
    let current = firstArr[i];

    for (let j = 0; j < secondArr.length; j++) {
      let secondCurrent = secondArr[j];

      if (current === secondCurrent) {
        console.log(current);
      }
    }
  }
}
