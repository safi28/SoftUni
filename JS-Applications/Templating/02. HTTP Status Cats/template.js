function display(e) {
    e.parentNode.children[1].style.display === 'none' ? e.parentNode.children[1].style.display = 'inline': e.parentNode.children[1].style.display = 'none'
}

(() => {
  renderCatTemplate();

  async function renderCatTemplate() {
    const source = await fetch(
      "http://127.0.0.1:5500/02.%20HTTP%20Status%20Cats/handles.hbs"
    ).then(res => res.text());

    const template = Handlebars.compile(source);
    const context = { cats: window.cats };

    const html = template(context);

    document.getElementById("allCats").innerHTML = html;
  }
})();
