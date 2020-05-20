function solve() {
  const selectMenuTo = document.getElementById("selectMenuTo");

  document
    .querySelector("#container > button")
    .addEventListener("click", convert);

  function convert() {
    let num = Number(document.getElementById("input").value);
    let result;

    if (selectMenuTo.value === "binary") {
      result = decimalToBanary(num);
    } else if (selectMenuTo.value === "hexadecimal") {
      result = decimalToHex(num).toUpperCase()
    }
    appendResult(result);
  }

  function appendResult(result) {
    document.getElementById('result').value = result;
  }

  function decimalToBanary(num) {
    return (num >>> 0).toString(2);
  }

  function decimalToHex(num) {
    return num.toString(16);
  }                                                                             

  function selectMenu() {
    let binaryOption = document.createElement("option");
    binaryOption.textContent = "Binary";
    binaryOption.value = "binary";

    let hexadecimal = document.createElement("option");
    hexadecimal.textContent = "Hexadecimal";
    hexadecimal.value = "hexadecimal";

    selectMenuTo.appendChild(binaryOption);
    selectMenuTo.appendChild(hexadecimal);
  }
  selectMenu();
}

