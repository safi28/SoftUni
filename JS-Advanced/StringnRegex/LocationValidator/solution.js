function solve() {
  let keyword = document.getElementById("string").value;
  let text = document.getElementById("text").value;
  let message = text.match(`${keyword}(.+)${keyword}`)[1];

  const validMessage = /(east|north).*?([\d]{2})[^,]*?,[^,]*?([\d]{6})/gim;
  const match = text.match(validMessage);

  let east;
  let north;

  var result;
  while ((result = validMessage.exec(text)) !== null) {
    if (result[1].toLowerCase() === "east") {
      east = result;
    } else {
      north = result;
    }
  }

  let pNorth = document.createElement("p");
  pNorth.innerHTML = `${north[2]}.${north[3]} N`;

  let pEast = document.createElement("p");
  pEast.innerHTML = `${east[2]}.${east[3]} E`;

  document.getElementById("result").appendChild(pNorth);
  document.getElementById("result").appendChild(pEast);

  let mess = document.createElement("p");
  mess.innerHTML = `Message: ${message}`;
  document.getElementById("result").appendChild(mess);
}
