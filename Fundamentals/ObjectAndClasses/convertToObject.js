function intoObject(jsonStr) {
  let convert = JSON.parse(jsonStr);
  let through = Object.entries(convert);

  for (let [key, value] of through) {
    console.log(`${key}: ${value}`);
  }
}
