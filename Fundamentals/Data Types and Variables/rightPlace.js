function order(str, char, last) {
  let ress = str.replace("_", char);
  var result = ress === last ? "Matched" : "Not Matched";

  console.log(result);
}
