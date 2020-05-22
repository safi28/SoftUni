function words(input) {
  let words = input.shift().split(" ");

  let wordsCount = {};
  for (let word of words) {
    wordsCount[word] = 0;
    // wordsCount.word search for properties
  }
  for (let currentWord of input) {
    if (wordsCount.hasOwnProperty(currentWord)) {
      wordsCount[currentWord]++;
    }
  }
  //sorting objects:
  let sortedWords = Object.entries(wordsCount).sort((a, b) => {
    let [firstWord, firstOccurence] = a;
    let [sectWord, secOccurence] = b;

    return secOccurence - firstOccurence;
  });
  for (let [word, occurence] of sortedWords) {
    console.log(`${word} - ${occurence}`);
  }
}
