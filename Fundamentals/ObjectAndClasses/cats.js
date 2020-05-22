function makeCat(arr) {
  let cats = [];

  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;

      this.meow = function () {
        return `${name}, age ${age} says Meow`;
      };
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let dataCat = arr[i].split(" ");
    let [name, age] = [dataCat[0], dataCat[1]];
    cats.push(new Cat(name, age));
  }
  for (let prop of cats) {
    console.log(prop.meow());
  }
}
