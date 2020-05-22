function mergingArrays(firstArr, secondArr) {
  let sum = 0;
  let thirdArr = [];
  let lenth = firstArr.length;

  for (let i = 0; i < lenth; i++) {
    let one = firstArr[i];
    let two = secondArr[i];

    if (i % 2 === 0) {
      thirdArr.push(Number(one) + Number(two));
    } else {
      thirdArr.push(one + two);
    }
  }
  console.log(thirdArr.join(" - "));
}
