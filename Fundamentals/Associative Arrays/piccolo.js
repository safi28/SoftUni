function picollo(input) {
  let arr = [];
  let obj = {};
  let nestObj = {};
  for (let i = 0; i < input.length; i++) {
    let splitting = input[i].split(", ");
    let [direction, carNumber] = splitting;
    let index = arr.indexOf(carNumber);
    obj[nestObj] = arr;

    if (!obj.hasOwnProperty(carNumber)) {
      if (direction === "IN" && !arr.includes(carNumber)) {
        arr.push(carNumber);
      } else if (direction === "OUT" && arr.includes(carNumber)) {
        arr.splice(index, 1);
      }
    } else {
      if (direction === "IN" && !arr.includes(carNumber)) {
        arr.push(carNumber);
      } else if (direction === "OUT" && arr.includes(carNumber)) {
        arr.splice(index, 1);
      }
    }
  }
  if (arr.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    let sorted = arr.sort((a, b) => a.localeCompare(b));
    console.log(sorted.join("\n"));
  }
}
