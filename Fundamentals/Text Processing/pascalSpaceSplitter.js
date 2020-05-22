function pascalCaseSplit(text) {
  let firstPascalLetter = (symbol) => {
    return symbol.toUpperCase() === symbol;
  };
  let output = "";
  let currentWord = text[0];

  for (let i = 1; i < text.length; i++) {
    if (firstPascalLetter(text[i])) {
      output += `${currentWord}, `;
      currentWord = text[i];
    } else {
      currentWord += text[i];
    }
  }
  output += currentWord;

  console.log(output);
}
