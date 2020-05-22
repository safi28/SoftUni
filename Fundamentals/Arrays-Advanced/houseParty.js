function housePartyy(input) {
  let list = [];

  for (let line of input) {
    let token = line.split(" ");
    let name = token[0];

    if (token.length === 3) {
      let included = list.includes(name);
      if (!included) {
        list.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
      let indOfPerson = list.indexOf(name);

      if (indOfPerson !== -1) {
        list.splice(indOfPerson, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(list.join("\n"));
}
