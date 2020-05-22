function solve(string, text) {
  text = text.split(" ");
  let found = false;

  for (let word of text) {
    word = word.toLowerCase();

    if (string === word) {
      console.log(word);
      found = true;
      break;
    }
  }

  if (!found) {
    console.log(`${string} not found!`);
  }
}
