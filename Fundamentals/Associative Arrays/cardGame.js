function cardGame(input) {
  let cardPowers = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let cardTypes = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };
  let players = {};

  for (let line of input) {
    let [name, cards] = line.split(": ");
    let uniqueCards = new Set(cards.split(", "));
    uniqueCards = [...uniqueCards];

    if (!players.hasOwnProperty(name)) {
      players[name] = uniqueCards;
    } else {
      for (let card of uniqueCards) {
        if (!players[name].includes(card)) {
          players[name].push(card);
        }
      }
    }
  }
  for (let name in players) {
    let deck = players[name];
    let sum = 0;

    for (let card of deck) {
      let tokens = [...card];

      if (tokens.length === 2) {
        sum += calculateSum(tokens[0], tokens[1]);
      } else {
        sum += calculateSum(tokens[0] + tokens[1], tokens[2]);
      }
    }
    console.log(`${name}: ${sum}`);
  }

  function calculateSum(power, type) {
    let cardPowerMultiplier = cardPowers[power];
    let cardTypeMultiplier = cardTypes[type];

    return cardPowerMultiplier * cardTypeMultiplier;
  }
}
