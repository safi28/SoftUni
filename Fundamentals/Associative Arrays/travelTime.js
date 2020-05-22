function countries(input) {
  let countries = {};

  input.forEach((line) => {
    let [country, town, price] = line.split(" > ");
    price = Number(price);

    if (!countries.hasOwnProperty(country)) {
      countries[country] = {};
      countries[country][town] = price;
    } else {
      let countryObject = countries[country];

      if (!countryObject.hasOwnProperty(town)) {
        countryObject[town] = price;
      } else {
        let oldPrice = countryObject[town];

        if (oldPrice > price) {
          //current price
          countryObject[town] = price;
        }
      }
    }
  });
  let sortedCountries = Object.entries(countries).sort(sortCountries);

  for (let [name, towns] of sortedCountries) {
    let sortedTowns = Object.entries(towns).sort(sortTowns);
    let output = `${name} -> `;
    for (let [townName, townPrice] of sortedTowns) {
      output += `${townName} -> ${townPrice} `;
    }
    console.log(output);
  }

  function sortCountries(firstCountry, secondCountry) {
    let firstName = firstCountry[0]; //string
    let secondName = secondCountry[0];

    return firstName.localeCompare(secondName);
  }
  function sortTowns(firstTown, secondTown) {
    let firstPrice = firstTown[1];
    let secondPrice = secondTown[1];

    return firstPrice - secondPrice;
  }
}
