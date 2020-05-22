function loadingBar(num) {
  let divide = num / 10;
  let point = 10 - divide;
  let procent = "%";
  let points = ".";

  let numb = num + procent;
  procent = procent.repeat(divide);
  let t = points.repeat(point);

  if (num < 100) {
    console.log(`${numb} [${procent}${t}]`);
    console.log("Still loading...");
  } else {
    console.log(`${numb} Complete! `);
    console.log(`[${procent}${t}]`);
  }
}
