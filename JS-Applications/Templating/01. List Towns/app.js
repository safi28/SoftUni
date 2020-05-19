(function() {

  document
    .getElementById("btnLoadTowns")
    .addEventListener("click", async function() {
      const towns = document.getElementById("towns-template").value.split(", ");

      const source = await fetch(
        "http://127.0.0.1:5500/01.%20List%20Towns/handles.hbs"
      ).then(data => data.text());

      const template = Handlebars.compile(source);

      const context = { towns };
      const html = template(context);

      document.getElementById("root").innerHTML += html;

    });
})();
