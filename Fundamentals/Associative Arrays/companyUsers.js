function companyUsers(input) {
  let obj = {};

  for (let string of input) {
    let [companyName, id] = string.split(" -> ");

    if (!obj.hasOwnProperty(companyName)) {
      let arr = [id];
      obj[companyName] = arr;
    } else {
      if (!obj[companyName].includes(id)) {
        obj[companyName].push(id);
      }
    }
  }
  let sorted = Object.keys(obj).sort((a, b) => a.localeCompare(b));

  for (let company of sorted) {
    console.log(company);

    obj[company].forEach((id) => {
      console.log(`-- ${id}`);
    });
  }
}
