function searching(elements, deleted) {
  let [first, second, third] = deleted;
  let count = 0;

  let takenNums = elements.slice(0, first);
//   let deletedFromTakenNums = takenNums.splice(0, second);

  for (let i = 0; i < takenNums.length; i++) {
    if (takenNums[i] === third) {
      count++;
    }
  }
  console.log(`Number ${third} occurs ${count} times.`);
}
