function solve(carInput) {
  const engine = {
    SmallEngine: { power: 90, volume: 1800 },
    NormalEngine: { power: 120, volume: 2400 },
    MonsterEngine: { power: 200, volume: 3500 }
  };
  const carrg = {
    Hatchback: { type: "hatchback", color: carInput.color },
    Coupe: { type: "coupe", color: carInput.color }
  };
  const wheels = Array(4);
  if (carInput.wheelsize % 2 === 0) {
    carInput.wheelsize = 2 * Math.floor(carInput.wheelsize / 2) - 1;
  }
  wheels.fill(carInput.wheelsize);
  carInput.wheelsize = wheels;

  if (carInput.power <= engine.SmallEngine.power) {
    carInput.power = engine.SmallEngine;
  } else if (carInput.power <= engine.NormalEngine.power) {
    carInput.power = engine.NormalEngine;
  } else if (carInput.power <= engine.MonsterEngine.power) {
    carInput.power = engine.MonsterEngine;
  }
  if (carInput.carriage === carrg.Hatchback.type) {
    carInput.carriage = carrg.Hatchback;
  } else if (carInput.carriage === carrg.Coupe.type) {
    carInput.carriage = carrg.Coupe;
  }
  carInput = {
    model: carInput.model,
    engine: carInput.power,
    carriage: carInput.carriage,
    wheels: carInput.wheelsize
  };
  return carInput;
}
console.log(
  solve({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14
  })
);
console.log();

console.log(
  solve({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17
  })
);
