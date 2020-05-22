function solve(input) {
  let obj = {};

  for (let property of input) {
    let arr = property.split(" | ");
    obj["town"] = arr[0];
    obj["latitude"] = Number(arr[1]).toFixed(2);
    obj["longitude"] = Number(arr[2]).toFixed(2);

    console.log(obj);
  }
}
