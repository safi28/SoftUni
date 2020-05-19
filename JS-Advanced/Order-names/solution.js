function solve() {
  const alphabet = {};
  const ind = {};
  let index = 0;

  for (let i = 65; i <= 90; i++) {
    index++;
    const letters = String.fromCharCode(i);
    alphabet[letters] = [];

    if (letters === "N") {
      alphabet[letters] = "Nixon";
    } else if (letters === "P") {
      alphabet[letters] = "Peterson";
    }
    ind[letters] = alphabet[letters];
    ind[letters] = index;
  }

  document
    .querySelector("#exercise > article > button")
    .addEventListener("click", text);

  function text() {
    let input = document.querySelector("#exercise > article > input[type=text]")
      .value;
    let firstLetter = input[0].toUpperCase();

    input =
      input.substring(0, 1).toLocaleUpperCase() +
      input.substring(1).toLowerCase();
    alphabet[firstLetter].push(input);

    let listItems = document.querySelectorAll("ol li");
    listItems[ind[firstLetter] - 1].textContent = alphabet[firstLetter].join(", ");
    
  }
}
