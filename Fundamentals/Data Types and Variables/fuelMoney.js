function fuel(distance, passengers, price) {
  let fueld = (distance / 100) * 7;
  fueld += passengers * 0.1;
  let needed = price * fueld;
  console.log(`Needed money for that trip is ${needed}lv.`);
}
