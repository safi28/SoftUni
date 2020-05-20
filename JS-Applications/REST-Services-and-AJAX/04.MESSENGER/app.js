function attachEvents() {
  const user = document.getElementById("author");
  const message = document.getElementById("content");
  const textarea = document.getElementById("messages");

  const sendBtn = document.getElementById("submit");
  const refreshBtn = document.getElementById("refresh");

  sendBtn.addEventListener("click", send);
  refreshBtn.addEventListener("click", refresh);

  function send() {
    const authorName = user.value;
    const msText = message.value;
    let obj = { author: authorName, content: msText };
    const headers = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(obj)
    };
    fetch(`https://messanger-type.firebaseio.com/messanger.json`, headers)
      .then(() => {
        user.value = "";
        message.value = "";
        textarea.textContent = "";
      })
      .catch(handleError);
  }
  function refresh() {
    fetch(`https://messanger-type.firebaseio.com/messanger.json`)
      .then(data => data.json())
      .then(el => {
        Object.entries(el).forEach(([id, data]) => {
          let { author, content } = data;
          textarea.textContent += `\n${author}: ${content}\n`;
        });
      })
      .catch(handleError);
  }
  function handleError() {
    if (typeof user.value !== "string" || typeof message.value !== "string") {
      throw TypeError("Cannot create send message, invalid input!");
    }
  }
  return {
    send,
    refresh,
    handleError
  };
}

attachEvents();
