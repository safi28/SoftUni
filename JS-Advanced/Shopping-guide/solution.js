function solve() {
  const product = document.getElementsByClassName("product");
  const textarea = document.getElementsByTagName("textarea")[0];
  const button = document.getElementsByClassName("add-product");
  let item = document.getElementsByClassName("product-title");
  let price = document.getElementsByClassName("product-line-price");

  let items = [];
  let totalAmount = 0;

  for (let i = 0; i < product.length; i++) {
    button[i].addEventListener("click", function() {
      const name = item[i].textContent;
      let amount = Number(price[i].textContent);

      if (!items.includes(name)) {
        items.push(name);
      }

      totalAmount += amount;
      textarea.textContent += `Added ${name} for ${amount.toFixed(
        2
      )} to the cart.\n`;
    });
  }
  
  let check = document.querySelector("body > div > button")
    .addEventListener("click", function() {
      textarea.value += `You bought ${items.join(
        ", "
      )} for ${totalAmount.toFixed(2)}.`;
      button.disabled = true;
    document.querySelector("body > div > button").disabled = true;
    });
    
}
