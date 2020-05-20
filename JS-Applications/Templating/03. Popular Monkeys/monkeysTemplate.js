function display(e) {
    e.parentNode.children[3].style.display === 'none' ? e.parentNode.children[3].style.display = 'inline-block': e.parentNode.children[3].style.display = 'none'
}

(() => {
  monkey();
  async function monkey() {
    const source = await fetch(
      "http://127.0.0.1:5500/03.%20Popular%20Monkeys/handles.hbs"
    ).then(res => res.text());

    const template = Handlebars.compile(source);
    const context = { monkeys };

    const html = template(context);

    document.getElementsByClassName("monkeys")[0].innerHTML = html;
  }
})();
