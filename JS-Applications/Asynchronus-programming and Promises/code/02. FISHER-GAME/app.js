import { fetching } from "./organizer.js";

function cache(fn) {
  fn.cache = new Map();

  return function() {
    let key = Object.keys(arguments);

    if (!fn.cache.has(key)) {
      fn.cache.set(key, fn(...arguments));
    }
    return fn.cache.set(key);
  };
}

function attachEvents() {
  const addCatchElements = {
    catch: {
      angler: () => document.querySelector("#addForm input.angler"),
      weight: () => document.querySelector("#addForm input.weight"),
      species: () => document.querySelector("#addForm input.species"),
      location: () => document.querySelector("#addForm input.location"),
      bait: () => document.querySelector("#addForm input.bait"),
      captureTime: () => document.querySelector("#addForm input.captureTime")
    },
    copyCatch: () => document.querySelector("div.catch"),
    catches: () => document.getElementById("catches"),
    addBtn: () => document.querySelector("#addForm > button"),
    loadBtn: () => document.querySelector("body > aside > button")
  };

  addCatchElements.loadBtn().addEventListener("click", loadEvent);
  addCatchElements.addBtn().addEventListener("click", addEvent);

  function addEvent() {
    const angler = addCatchElements.catch.angler().value;
    const weight = addCatchElements.catch.weight().value;
    const species = addCatchElements.catch.species().value;
    const location = addCatchElements.catch.location().value;
    const bait = addCatchElements.catch.bait().value;
    const captureTime = addCatchElements.catch.captureTime().value;

    fetching
      .post({ angler, weight, species, location, bait, captureTime })
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
    addCatchElements.catch.angler().value = "";
    addCatchElements.catch.bait().value = "";
    addCatchElements.catch.weight().value = "";
    addCatchElements.catch.location().value = "";
    addCatchElements.catch.captureTime().value = "";
    addCatchElements.catch.species().value = "";
  }

  function loadEvent() {
    fetching
      .get()
      .then(showCatches)
      .catch(err => console.log(err));

    function showCatches(data) {
      Object.keys(data).forEach(id => {
        const copy = addCatchElements.copyCatch().cloneNode(true);

        copy.setAttribute("data-id", id);

        Object.keys(addCatchElements.catch).forEach(key => {
          copy.querySelector(`input.${key}`).value = data[id][key];
        });
        addCatchElements.copyCatch().remove();

        addCatchElements.catches().appendChild(copy);
      });

      [...document.getElementsByClassName("update")].forEach(el =>
        el.addEventListener("click", update)
      );

      [...document.getElementsByClassName("delete")].forEach(el =>
        el.addEventListener("click", remove)
      );
    }
  }

  function remove(e) {
    const id = e.currentTarget.parentNode.getAttribute("data-id");

    fetching.del(id).then(loadEvent);

    document.getElementById("angler-catches").value = "";
    document.getElementById("number-catches").value = "";
    document.getElementById("bait-catches").value = "";
    document.getElementById("location-catches").value = "";
    document.getElementById("species-catches").value = "";
    document.getElementById("captureTime-catches").value = "";

    confirm("Delete information?");
  }

  function update(e) {
    const id = e.currentTarget.parentNode.getAttribute("data-id");

    const data = e.currentTarget.parentNode.children;

    let angler = data[1].value;
    let weight = data[4].value;
    let species = data[7].value;
    let location = data[10].value;
    let bait = data[13].value;
    let captureTime = data[16].value;

    fetching
      .put({ angler, weight, species, location, bait, captureTime }, id)
      .then(loadEvent)
      .catch(err => console.log(err));
    alert("Updating is done successfully!");
  }
}

attachEvents();
