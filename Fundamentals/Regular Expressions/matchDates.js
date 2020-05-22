function solve(dates) {
  let pattern = /\b(?<day>\d{2})([\/.-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
  let valid = null;

  while ((valid = pattern.exec(dates)) !== null) {
    let day = valid.groups["day"];
    let month = valid.groups["month"];
    let year = valid.groups["year"];

    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
  }
}
