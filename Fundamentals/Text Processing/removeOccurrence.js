function remove(removeWord, elements) {
  let copy = elements.substring(0);

  for (let curseWords of copy) {
    let index = copy.indexOf(removeWord);
    if (index !== -1) {
      copy = copy.replace(removeWord, "");
    }
  }
  console.log(copy);
}
