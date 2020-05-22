function revealWord(wantedWord, text) {
  let secondWanted = wantedWord.split(", ");
  secondWanted.forEach((element) => {
    text = text.replace("*".repeat(element.length), element);
  });
  console.log(text);
}
