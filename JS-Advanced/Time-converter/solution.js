function attachEventsListeners() {
  const convertFrom = {
    days: days => {
      const hours = days * 24;
      const min = hours * 60;
      const sec = min * 60;

      return [hours, min, sec];
    },
    hours: h => {
      const days = h / 24;
      const min = h * 60;
      const sec = min * 60;

      return [days, min, sec];
    },
    minutes: m => {
      const h = m / 60;
      const days = h / 24;
      const sec = m * 60;

      return [days, h, sec];
    },
    second: s => {
      const m = s / 60;
      const hours = m / 60;
      const days = hours / 24;

      return [days, hours, m];
    }
  };

  const dayInput = document.getElementById("days");
  const hoursInput = document.getElementById("hours");
  const minInput = document.getElementById("minutes");
  const secInput = document.getElementById("seconds");

  function inputHandler(input, unit, firstI, secI, thirdI) {
    const value = +input.value;

    let [firstUnit, secondUnit, thirdUnit] = convertFrom[unit](value);
    firstI.value = firstUnit;
    secI.value = secondUnit;
    thirdI.value = thirdUnit;
  }

  document
    .getElementById("daysBtn")
    .addEventListener("click", () =>
      inputHandler(dayInput, "days", hoursInput, minInput, secInput)
    );
  document
    .getElementById("hoursBtn")
    .addEventListener("click", () =>
      inputHandler(hoursInput, "hours", dayInput, minInput, secInput)
    );
  document
    .getElementById("minutesBtn")
    .addEventListener("click", () =>
      inputHandler(minInput, "minutes", dayInput, hoursInput, secInput)
    );
  document
    .getElementById("secondsBtn")
    .addEventListener("click", () =>
      inputHandler(secInput, "seconds", dayInput, hoursInput, minInput)
    );
}
