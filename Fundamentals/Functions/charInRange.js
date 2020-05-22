function charRange(firstChar, secondChar) {
  let first = firstChar.charCodeAt(0);
  let second = secondChar.charCodeAt(0);

  let start = Math.min(first, second);
  let end = Math.max(first, second);

  let arr = [];
  for (let i = start + 1; i < end; i++) {
    let current = String.fromCharCode(i);
    arr.push(current);
  }
  console.log(arr.join(" "));
}
