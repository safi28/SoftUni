function getInfo() {
  const stopId = document.getElementById("stopId").value;
  const stopName = document.getElementById("stopName");
  const busId = document.getElementById("buses");

  const stopIdUrl = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

  fetch(stopIdUrl)
    .then(data => data.json())
    .then(el => {
      const { buses, name } = el;

      Object.entries(buses).forEach(element => {
        const list = document.createElement("li");
        const [id, min] = element;
        list.textContent = `Bus ${id} will arrive in ${min} minutes.`;
        busId.appendChild(list);
        stopName.textContent = name;
      });
    })
    .catch(err => {
      stopName.textContent = "Error";
      busId.textContent = '';

    });
}
