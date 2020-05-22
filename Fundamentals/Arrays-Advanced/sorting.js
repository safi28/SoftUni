function sorting(arr) {
  let newArr = [];
  let copy = arr.slice();
  let sth = copy.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      let biggest = sth.shift();
      newArr.push(biggest);
    } else {
      let smallest = sth.pop();
      newArr.push(smallest);
    }
  }
  console.log(newArr.join(" "));
}
