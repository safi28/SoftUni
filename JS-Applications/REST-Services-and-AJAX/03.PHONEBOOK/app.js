function attachEvents() {
  const phonebookContainer = document.getElementById("phonebook");

  const name = document.getElementById("person");
  const telephoneNum = document.getElementById("phone");

  function load() {
    fetch(`https://first-41e8d.firebaseio.com/phonebook.json`)
      .then(data => data.json())
      .then(el => {
        Object.entries(el).forEach(([id, phonebook]) => {
          const { phone, person } = phonebook;
          let li = document.createElement("li");
          li.textContent = `${person}: ${phone}`;

          const deleteBtn = document.createElement("button");
          deleteBtn.setAttribute("data-target", id);
          deleteBtn.addEventListener("click", deleteTarget);
          deleteBtn.textContent = "Delete";

          li.appendChild(deleteBtn);
          phonebookContainer.appendChild(li);
        });
      })
      .catch(handleError);
  }

  function deleteTarget() {
    const phoneId = this.getAttribute("data-target");

    const headers = {
      method: "DELETE"
    };
    fetch(
      `https://first-41e8d.firebaseio.com/phonebook/${phoneId}.json`,
      headers
    )
      .then(() => {
        phonebookContainer.innerHTML = "";

        load();
      })
      .catch(handleError);
  }

  function create() {
    let person = name.value;
    let phone = telephoneNum.value;
    let headers = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ person, phone })
    };
    fetch(`https://first-41e8d.firebaseio.com/phonebook.json`, headers)
      .then(() => {
        phonebookContainer.innerHTML = "";
        name.value = "";
        telephoneNum.value = "";
        load();
      })
      .catch(handleError);
  }

  function handleError() {
    if(typeof telephoneNum.value !== 'number' || typeof name.value !== 'string') {
        throw TypeError('Cannot create contact, invalid input!')
    }
    
  }
  return {
    load,
    deleteTarget,
    create,
    handleError
  };
}

let result = attachEvents();
