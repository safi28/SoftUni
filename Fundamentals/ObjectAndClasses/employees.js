function employers(input) {
  let objInp = {};
  for (let elem of input) {
    objInp[elem] = elem.length;
  }
  for (let name in objInp) {
    console.log(`Name: ${name} -- Personal Number: ${objInp[name]}`);
  }
}
