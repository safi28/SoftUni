function solve() {
  let myObj = {
    extend: function(value) {
      for (let line of Object.keys(value)) {
        if (typeof value[line] === "function") {
          Object.getPrototypeOf(myObj)[line] = value[line];
        } else {
          myObj[line] = value[line];
        }
      }
    }
  };
  return myObj;
}
solve();
