function chatMessager() {
  const button = document.getElementById("send");
  button.addEventListener("click", sendMess);

  const contMessage = document.getElementById("chat_input");

  function sendMess() {
    let message = contMessage.value;
    let newMessage = document.createElement("div");
    newMessage.classList.add("message","my-message");
    newMessage.textContent = message;
    document.getElementById("chat_messages").appendChild(newMessage);
    contMessage.value = '';
   
}
}
