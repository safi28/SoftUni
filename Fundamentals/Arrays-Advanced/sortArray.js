function sortingArrCriteria(input) {
  let sorted = input.sort(sortName);
  console.log(sorted.join("\n"));

  function sortName(a, b) {
    //first Criteria for length
    let result = a.length - b.length;

    if (result === 0) {
      return a.localeCompare(b);
    }
    return result;
  }
}
