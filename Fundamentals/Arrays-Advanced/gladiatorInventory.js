function gladiator(input) {
  let inventory = input.shift().split(" ");

  for (let i = 0; i < input.length; i++) {
    let commands = input[i].split(" ");
    let command = commands[0];
    let equipment = commands[1];
    let eqipmentt = inventory.indexOf(equipment);

    if (command === "Buy" && eqipmentt === -1) {
      inventory.push(equipment);
    } else if (command === "Trash" && eqipmentt !== -1) {
      inventory.splice(eqipmentt, 1);
    } else if (command === "Repair" && eqipmentt !== -1) {
      inventory.splice(eqipmentt, 1);
      inventory.push(equipment);
    } else if (command === "Upgrade") {
      let [eqpm, upgrade] = equipment.split("-");
      let eqpmnt = inventory.indexOf(eqpm);
      if (eqpmnt !== -1) {
        inventory.splice(eqpmnt + 1, 0, `${eqpm}:${upgrade}`);
      }
    }
  }
  console.log(inventory.join(" "));
}
