import { weather } from "./fetchG.js";

const symbols = {
  sunny: "☀",
  partlysunny: "⛅",
  overcast: "☁",
  rain: "☂",
  degrees: "°"
};

const elements = {
  $inputValue: () => document.getElementById("location"),
  $submit: () => document.getElementById("submit"),
  $current: () => document.getElementById("current"),
  $forecast: () => document.getElementById("forecast"),
  $upcoming: () => document.getElementById("upcoming")
};

function attachEvents() {
  elements.$submit().addEventListener("click", getWeather);
}

function getWeather() {
  const location = elements.$inputValue().value;

  weather()
    .locations()
    .then(locations => {
      const currentLocations = locations.find(el => el.name === location);

      return Promise.all([
        weather().today(currentLocations.code),
        weather().upcoming(currentLocations.code)
      ]);
    })
    .then(([today, upcoming]) => {
      todayWeather(today, upcoming);
    })
    .catch(console.error);
}

function createHtmlElement(tagName, className, textContent) {
  const element = document.createElement(tagName);

  if (className) {
    element.classList.add(...className);
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

function normalizeSmbol(el) {
  return el
    .split("")
    .filter(el => el !== " ")
    .map(x => x.toLowerCase())
    .join("");
}

function todayWeather(today, upcoming) {
  elements.$forecast().style.display = "block";

  const { condition, low, high } = today.forecast;
  const symbol = normalizeSmbol(today.forecast.condition);
  const $divWrapper = createHtmlElement("div", ["forecasts"]);
  const $spanSymbol = createHtmlElement(
    "span",
    ["condition", "symbol"],
    symbols[symbol]
  );
  const $spanWrapper = createHtmlElement("span", ["condition"]);
  const degrees = `${low}${symbols.degrees}/${high}${symbols.degrees}`;

  const $spanName = createHtmlElement("span", ["forecast-data"], today.name);
  const $spanDegrees = createHtmlElement("span", ["forecast-data"], degrees);
  const $spanCondition = createHtmlElement(
    "span",
    ["forecast-data"],
    condition
  );

  $spanWrapper.append($spanName, $spanDegrees, $spanCondition);
  $divWrapper.append($spanSymbol, $spanWrapper);
  elements.$current().append($divWrapper);

  upcomingWeather(upcoming);
}

function upcomingWeather(upcoming) {
  const $divWrapper = createHtmlElement("div", ["forecast-info"]);
  
  upcoming.forecast.forEach(el => {
    const { condition, low, high } = el;
    const symbol = normalizeSmbol(condition);
    const degrees = `${low}${symbols.degrees}/${high}${symbols.degrees}`;
    const $spanDegrees = createHtmlElement("span", ["forecast-data"], degrees);

    const $spanWrapper = createHtmlElement("span", ["upcoming"]);

    const $spanSymbol = createHtmlElement("span", ["symbol"], symbols[symbol]);
    const $spanCondition = createHtmlElement(
      "span",
      ["forecast-data"],
      condition
    );
    $spanWrapper.append($spanSymbol, $spanDegrees, $spanCondition);
    $divWrapper.append($spanWrapper);
  });
  elements.$upcoming().append($divWrapper);
}

attachEvents();
