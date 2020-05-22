function substring(word, fromInd, endId) {
  let copy = word.substring(0);

  copy = copy.substr(fromInd, endId);
  console.log(copy);
}
