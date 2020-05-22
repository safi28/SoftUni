function solve(input) {
  let text = input.shift();
  let fillWords = input.shift();

  if (text.includes("_")) {
    text = text.split(" ");

    for (let word of text) {
      let index = text.indexOf(word);

      fillWords = fillWords.join().split(",");
      if (word.includes("_")) {
        let lasEl = word.split("");

        if (word[lasEl.length - 1] !== "_") {
          lasEl.pop();
        }
        word = lasEl;

        for (let words of fillWords) {
          words = words.split("");
          let term = words.length;
          let length = word.length;

          if (length === term) {
            let fkg = words.join("");
            text.splice(index, 1, fkg);
          }
        }
      }
    }
  }
  console.log(text.join(" "));
}
