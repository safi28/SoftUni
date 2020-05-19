export function weather() {
  const baseUrl = "https://judgetests.firebaseio.com";

  return {

    locations: () => fetch(`${baseUrl}/locations.json`).then((data) => data.json()),
    today: (code) => fetch(`${baseUrl}/forecast/today/${code}.json`).then((data) => data.json()),
    upcoming: (code) => fetch(`${baseUrl}/forecast/upcoming/${code}.json`).then((data) => data.json())

  
  }
}
