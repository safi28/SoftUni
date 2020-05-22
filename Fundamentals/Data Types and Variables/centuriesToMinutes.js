function convert(num) {
  let century = num * 100;
  let days = Math.trunc(century * 365.2422);
  let hours = days * 24;
  let mins = hours * 60;

  console.log(
    `${num} centuries = ${century} years = ${days} days = ${hours} hours = ${mins} minutes`
  );
}
