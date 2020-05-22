function solve(firstName, lastName, age) {
  let person = {
    firstName,
    lastName,
    age,
  };
  for (let prop of Object.entries(person)) {
    console.log(prop.join(": "));
  }
}
