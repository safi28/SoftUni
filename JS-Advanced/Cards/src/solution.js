function solve() {
  let history = document.getElementById("history");
  let left = document.querySelector("#result").firstElementChild;
  let right = document.querySelector("#result").lastElementChild;

  let playerOne;
  let playerTwo;

  Array.from(document.getElementsByClassName("cards")).forEach(element => {
    element.addEventListener("click", function(x) {
      x.target.src = "images/whiteCard.jpg";

      if (x.target.parentElement.id === "player1Div") {
        left.innerHTML = x.target.name;
        playerOne = x.target;
      } else if (x.target.parentElement.id === "player2Div") {
        right.innerHTML = x.target.name;
        playerTwo = x.target;
      }

      if (left.innerHTML !== "" && right.innerHTML !== "") {
        if (Number(left.innerHTML) > Number(right.innerHTML)) {
          playerOne.style.border = "2px solid green";
          playerTwo.style.border = "2px solid red";
          history.textContent += `[${left.innerHTML} vs ${right.innerHTML}] `;
        } else {
          playerTwo.style.border = "2px solid green";
          playerOne.style.border = "2px solid red";
          history.textContent += `[${left.innerHTML} vs ${right.innerHTML}] `;
        }
      }
    });
  });
}
