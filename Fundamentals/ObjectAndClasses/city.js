function city(name, area, population, country, postCode) {
  let city = {
    name,
    area,
    population,
    country,
    postCode,
  };
  let holding = Object.entries(city);
  for (let [key, value] of holding) {
    console.log(`${key} -> ${value}`);
  }
}
