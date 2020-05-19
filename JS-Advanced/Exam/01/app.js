function solution() {
  const add = document.getElementsByClassName("card")[0];
  const listUl = document.getElementsByTagName("ul")[0];
  const giftName = document.getElementsByTagName("input")[0];
  const sendCard = document.getElementsByClassName("card")[2];
  const discardedCard = document.getElementsByClassName("card")[3];

  document
    .getElementsByTagName("button")[0]
    .addEventListener("click", function() {
      const sendBtn = document.createElement("button");
      sendBtn.setAttribute("id", "sendButton");
      sendBtn.textContent = "Send";
      const discardBtn = document.createElement("button");
      discardBtn.setAttribute("id", "discardButton");
      discardBtn.textContent = "Discard";

      [...giftName.value].sort((a, b) => a.localeCompare(b));

      const li = document.createElement("li");
      li.classList.add("gift");
      li.textContent = giftName.value;
      li.appendChild(sendBtn);
      li.appendChild(discardBtn);

      listUl.appendChild(li);

      sendBtn.addEventListener("click", function(e) {
        e.target.parentNode.remove();

        const sendLi = document.createElement("li");
        sendLi.classList.add("gift");

        sendLi.textContent = giftName.value;

        sendCard.appendChild(sendLi);
      });

      discardBtn.addEventListener("click", function(e) {
        e.target.parentNode.remove();

        const discardLi = document.createElement("li");
        discardLi.classList.add("gift");

        discardLi.textContent = giftName.value;

        discardedCard.appendChild(discardLi);
      });
    });
}
