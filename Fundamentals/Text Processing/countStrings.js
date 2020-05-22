function wordOccurence(text, searchWord) {
  let textSplit = text.split(" ");
  let count = 0;

  for (let searching of textSplit) {
    if (searching === searchWord) {
      count++;
    }
  }
  console.log(count);
}
