function solve(input) {
  let participants = input.shift().split(", ");
  let playerObj = {};

  input.forEach((element) => {
    let names = /[A-Za-z]/g;
    let destinations = /[\d]/g;

    let players = element.match(names).join("");

    if (participants.includes(players)) {
      let race = element.match(destinations).reduce((a, b) => +a + +b, 0);

      if (!playerObj[players]) {
        playerObj[players] = 0;
      }
      playerObj[players] += race;
    }
  });

  Object.keys(playerObj)
    .sort((a, b) => playerObj[b] - playerObj[a])
    .slice(0, 3)
    .forEach((line, i) => {
      let p = "";
      switch (i) {
        case 0:
          p = "st";
          break;
        case 1:
          p = "nd";
          break;
        case 2:
          p = "rd";
          break;
      }
      console.log(`${i + 1}${p} place: ${line}`);
    });
}
