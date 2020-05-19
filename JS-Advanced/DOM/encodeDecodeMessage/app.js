function encodeAndDecodeMessages() {
  let buttons = document.getElementsByTagName("button");
  let textarea = document.getElementsByTagName("textarea");

  let sendEncode = buttons[0];
  let replyDecode = buttons[1];

  let encodeText = textarea[0];
  let decodeText = textarea[1];

  sendEncode.addEventListener("click", encoding);
  replyDecode.addEventListener("click", decoding);

  function encoding() {
    let text = encodeText.value;
    let enc = text
      .split("")
      .map(n => n.charCodeAt(0) + 1)
      .map(x => String.fromCharCode(x))
      .join("");
    encodeText.value = "";
    decodeText.value = enc;
  }
  function decoding() {
    let text = decodeText.value;
    let dcd = text
      .split("")
      .map(n => n.charCodeAt(0) - 1)
      .map(x => String.fromCharCode(x))
      .join("");
    decodeText.value = dcd;
  }
}
