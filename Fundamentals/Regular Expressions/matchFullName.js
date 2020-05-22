function solve(text) {
  let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
  let valid = null;
  let validNames = [];

  while ((valid = pattern.exec(text)) !== null) {
    validNames.push(valid[0]);
  }
  console.log(validNames.join(" "));
}
