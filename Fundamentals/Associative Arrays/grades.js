function grades(input) {
  const map = new Map();

  for (const iterate of input) {
    const sep = iterate.split(" ");
    const name = sep[0];
    const grades = sep.splice(1, sep.length).map(Number);

    if (!map.has(name)) {
      map.set(name, []);
      map.set(name, map.get(name).concat(grades));
    } else {
      map.set(name, map.get(name).concat(grades));
    }
  }
  let sorted = Array.from(map).sort((a, b) => average(a, b));

  function average(a, b) {
    let sum = 0;
    for (let i = 0; i < a[1].length; i++) {
      sum += a[1][i];
    }
    let secSum = 0;
    for (let i = 0; i < b[1].length; i++) {
      secSum += b[1][i];
    }
    const aAvrg = sum / a[1].length;
    const bAvrg = secSum / b[1].length;
    return aAvrg - bAvrg;
  }
  for (let result of sorted) {
    console.log(`${result[0]}: ${result[1].join(", ")}`);
  }
}
