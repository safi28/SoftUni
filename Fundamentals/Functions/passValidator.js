function password(pass) {
  let digit = (asciiCode) => asciiCode >= 48 && asciiCode <= 57;

  let validLengt = validLength();
  let isValidCont = validContent();
  let validDigits = twoDigits();

  if (!validLengt) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!isValidCont) {
    console.log("Password must consist only of letters and digits");
  }
  if (!validDigits) {
    console.log("Password must have at least 2 digits");
  }
  if (validLengt && isValidCont && validDigits) {
    console.log("Password is valid");
  }

  function validLength() {
    return pass.length >= 6 && pass.length <= 10;
  }

  function validContent() {
    let lowerCase = pass.toLowerCase();
    let letter = (asciiCode) => asciiCode >= 97 && asciiCode <= 122;

    for (let i = 0; i < lowerCase.length; i++) {
      let ascii = lowerCase.charCodeAt(i);

      if (letter(ascii) || digit(ascii)) {
        continue;
      }
      return false;
    }
    return true;
  }
  function twoDigits() {
    let digitCount = 0;
    for (let i = 0; i < pass.length; i++) {
      let symbol = pass.charCodeAt(i);
      let asciiDigit = digit(symbol);

      if (asciiDigit) {
        digitCount++;
      }
    }
    return digitCount >= 2;
  }
}
