function wordOccurence(input) {
  let wordCount = {};
  for (let string of input) {
    let sept = string.split(" ");
    wordCount[sept] = 0;
  }
  for (let result of input) {
    if (wordCount.hasOwnProperty(result)) {
      wordCount[result]++;
    }
  }
  let sorted = Object.entries(wordCount).sort((a, b) => {
    let [firstWord, firstOccurence] = a;
    let [sectWord, secOccurence] = b;

    return secOccurence - firstOccurence;
  });
  for (let [word, occurence] of sorted) {
    console.log(`${word} -> ${occurence} times`);
  }
}
