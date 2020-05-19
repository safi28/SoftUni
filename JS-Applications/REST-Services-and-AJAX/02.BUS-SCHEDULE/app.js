function solve() {
  const infoClass = document.getElementsByClassName("info")[0];
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  
  let currentId = "depot";
  let currentName;

  function depart() {
    fetch(`https://judgetests.firebaseio.com/schedule/${currentId}.json`)
      .then(data => data.json())
      .then(el => {
        let { name, next } = el;
        currentId = next;
        currentName = name;
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        infoClass.textContent = `Next stop ${currentName}`;
      })
      .catch(err => {
        console.log("error");
      });
  }

  function arrive() {
    fetch(`https://judgetests.firebaseio.com/schedule/${currentId}.json`)
      .then(data => data.json())
      .then(el => {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        infoClass.textContent = `Arriving at ${currentName}`;
      })
      .catch(err => {
        console.log("error");
      });
  }

  return {
    depart,
    arrive
  };
}

let result = solve();
