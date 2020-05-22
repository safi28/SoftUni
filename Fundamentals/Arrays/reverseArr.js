function reversing(n, arrinp) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(n[i]);
  }
  let ouput = " ";
  for (let i = arr.length - 1; i >= 0; i--) {
    ouput += arrinp[i] + " ";
  }

  console.log(ouput);
}
