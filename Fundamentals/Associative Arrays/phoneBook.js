function solve(input) {
  let phoneBook = {};

  for (const string of input) {
    let splitting = string.split(" ");
    const names = splitting[0];
    const phones = splitting[1];
    phoneBook[names] = phones;
  }
  for (const name in phoneBook) {
    console.log(`${name} -> ${phoneBook[name]}`);
  }
}
