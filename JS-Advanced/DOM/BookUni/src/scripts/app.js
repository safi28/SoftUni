function solve() {
  const [title, yearInput, priceInput] = Array.from(
    document.querySelectorAll("input")
  );
  const addButton = document.querySelector("button");
  const profit = document.getElementsByTagName("h1")[1];

  let totalSum = 0;

  const [oldShelf, newShelf] = Array.from(
    document.getElementsByClassName("bookShelf")
  );

  addButton.addEventListener("click", function(e) {
    //e.preventDefault();
    let text = title.value;
    let year = Number(yearInput.value);
    let price = Number(priceInput.value);

    if (text !== "" && year > 0 && price > 0) {
      if (year >= 2000) {
        createBook(false, text, year, price, newShelf);
      } else {
        createBook(true, text, year, price, oldShelf);
      }
    }
  });

  function createBook(isOld, text, year, price, shelf) {
    price = isOld ? (price = price * 0.85) : price;
    const book = document.createElement("div");
    const p = document.createElement("p");
    const buyButton = document.createElement("button");

    book.classList.add("book");
    p.textContent = `${text} [${year}]`;
    buyButton.textContent = `Buy it only for ${price.toFixed(2)} BGN`;

    buyButton.addEventListener("click", function() {
      totalSum += price;
      this.parentNode.parentNode.removeChild(this.parentElement);
      profit.textContent = `Total Store Profit: ${totalSum.toFixed(2)} BGN`;
    });
    book.appendChild(p);
    book.appendChild(buyButton);

    if (!isOld) {
      const moveButton = document.createElement("button");
      moveButton.textContent = `Move to old section`;
      book.appendChild(moveButton);

      moveButton.addEventListener("click", function() {
        this.parentNode.parentNode.removeChild(this.parentNode);
        createBook(true, text, year, price, oldShelf);
      });
    }
    shelf.appendChild(book);
  }
}
