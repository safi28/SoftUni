function retrieve(grade) {
  let result = "";
  if (grade >= 2.0 && grade <= 2.99) {
    result = "Fail";
  } else if (grade >= 3.0 && grade <= 3.49) {
    result = "Poor";
  } else if (grade >= 3.5 && grade <= 4.49) {
    result = "Good";
  } else if (grade >= 4.5 && grade <= 5.49) {
    result = "Very good";
  } else {
    result = "Excellent";
  }
  return result;
}
