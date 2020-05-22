function train(arr) {
  let wagons = arr.shift().split(" ").map(Number);

  let maxCpacity = +arr.shift();

  for (let line of arr) {
    let tokens = line.split(" ");

    if (tokens.length === 2) {
      let woganPassenger = Number(tokens[1]);
      wagons.push(woganPassenger);
    } else {
      let passengerCount = Number(tokens[0]);

      for (let i = 0; i < wagons.length; i++) {
        let currentCapacity = wagons[i];

        if (passengerCount + currentCapacity <= maxCpacity) {
          wagons[i] += passengerCount;
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}
