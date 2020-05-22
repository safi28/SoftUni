function censoreWords(words, curseWord) {
  let censored = words.replace(curseWord, repeat(curseWord));

  while (censored.includes(curseWord)) {
    censored = censored.replace(curseWord, repeat(curseWord));
  }

  function repeat(censore) {
    for (let lengthWord of censore) {
      let length = lengthWord.replace(lengthWord, "*".repeat(curseWord.length));
      return length;
    }
  }
  console.log(censored);
}
