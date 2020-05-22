function solve(input) {
  let rooms = input[0].split("|");
  let health = 100;
  let coins = 0;

  for (let i = 0; i < rooms.length; i++) {
    let newArr = rooms[i].split(" ");

    if (newArr[0] === "potion") {
      newArr[1] = Number(newArr[1]);
      if (health + newArr[1] >= 100) {
        console.log(`You healed for ${100 - health} hp.`);
        console.log(`Current health: ${100} hp.`);
        health = 100;
      } else {
        health += Number(newArr[1]);
        console.log(`You healed for ${newArr[1]} hp.`);
        console.log(`Current health: ${health} hp.`);
      }
    }
    if (newArr[0] === "chest") {
      newArr[1] = Number(newArr[1]);
      coins += Number(newArr[1]);
      console.log(`You found ${newArr[1]} coins.`);
    }
    if (newArr[0] !== "potion" && newArr[0] !== "chest") {
      newArr[1] = Number(newArr[1]);
      health -= Number(newArr[1]);
      if (health > 0) {
        console.log(`You slayed ${newArr[0]}.`);
      } else {
        console.log(`You died! Killed by ${newArr[0]}.`);
        console.log(`Best room: ${i + 1}`);
        break;
      }
    }
  }
  if (health > 0) {
    console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
  }
}
