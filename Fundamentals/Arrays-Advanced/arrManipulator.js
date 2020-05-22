function manipulator(input, comm) {
  for (let i = 0; i < comm.length; i++) {
    let commands = comm[i].split(" ");
    let command = commands[0];
    let index = Number(commands[1]);
    let element = Number(commands[2]);

    let ind = input.indexOf(index);

    if (command === "add") {
      input.splice(index, 0, element);
    } else if (command === "contains") {
      if (ind !== -1) {
        console.log(ind);
      } else {
        console.log(ind);
      }
    } else if (command === "remove") {
      input.splice(index, 1);
    } else if (command === "addMany") {
      let comma = commands.shift();
      let num = Number(commands.shift());
      let copy = commands.length;
      for (let j = 0; j < copy; j++) {
        let adNums = Number(commands[j]);
        input.splice(num, 0, adNums);
        num++;
      }
    } else if (command === "shift") {
      //Не е numbers.shift(), a commands.shift()
      for (let i = 0; i < index; i++) {
        //Трябва да се завърти цикъл до броя ротации
        let temp = input.shift();
        input.push(temp);
      }
    } else if (command === "sumPairs") {
      let arr = [];

      for (let i = 0; i < input.length; i += 2) {
        if (i === input.length - 1 && input.length % 2 !== 0) {
          arr.push(input[i]);
        } else {
          arr.push(Number(input[i]) + Number(input[i + 1]));
        }
      }
      input = arr.slice(0);
    }
  }
  console.log(input);
}
