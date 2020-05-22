function storage(input) {
  const map = new Map();

  for (let i of input) {
    const info = i.split(" ");
    const item = info[0];
    const value = Number(info[1]);

    if (map.has(item)) {
      const quantity = map.get(item) + value;
      map.set(item, quantity);
    } else {
      map.set(item, value);
    }
  }
  for (const result of map) {
    console.log(`${result[0]} -> ${result[1]}`);
  }
}
