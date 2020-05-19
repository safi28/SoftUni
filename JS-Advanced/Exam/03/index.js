class ChristmasDinner {
  constructor(budget) {
    this.budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};

    if (this.budget < 0) {
      throw new Error("The budget cannot be a negative number");
    }
  }

  shopping(product) {
    const type = product[0];
    const price = product[1];
    if (this.budget < price) {
      throw new Error("Not enough money to buy this product");
    }
    this.products.push(type);
    this.budget -= price;

    return `You have successfully bought ${type}!`;
  }

  recipes(recipe) {
    const list = recipe.productsList;

    list.forEach(element => {
      if (this.products.includes(element)) {
        const name = recipe.recipeName;
        const products = recipe.productsList;
        this.dishes.push({ name, products });

        return `${name} has been successfully cooked!`;
      }
      throw new Error("We do not have this product");
    });
  }

  inviteGuests(name, dish) {
    const present = this.dishes.filter(x => x.name === dish);
    const guest = Object.keys(this.guests).filter(x => x === name);

    if (present.length < 1) {
      throw new Error("We do not have this dish");
    }
    if (guest.length > 1) {
      throw new Error("This guest has already been invited");
    }
    const invite = {
      name: dish
    };
    this.guests[name] = dish;

    return `You have successfully invited ${name}!`;
  }

  showAttendance() {
    Object.entries(this.guests).forEach(x => {
      let result = "";
      const meal = x[1];
      const name = x[0];

      this.dishes
        .filter(x => x.name === meal)
        .forEach(p => {
          result = `${name} will eat ${meal}, which consist of ${p.products}`;
        });
      return result
    });
  }
}

let dinner = new ChristmasDinner();

dinner.shopping(["Salt", 1]);
dinner.shopping(["Beans", 3]);
dinner.shopping(["Cabbage", 4]);
dinner.shopping(["Rice", 2]);
dinner.shopping(["Savory", 1]);
dinner.shopping(["Peppers", 1]);
dinner.shopping(["Fruits", 40]);
dinner.shopping(["Honey", 10]);

dinner.recipes({
  recipeName: "Oshav",
  productsList: ["Fruits", "Honey"]
});

dinner.recipes({
  recipeName: "Folded cabbage leaves filled with rice",
  productsList: ["Cabbage", "Rice", "Salt", "Savory"]
});
dinner.recipes({
  recipeName: "Peppers filled with beans",
  productsList: ["Beans", "Peppers", "Salt"]
});

dinner.inviteGuests("Ivan", "Oshav");
dinner.inviteGuests("Petar", "Folded cabbage leaves filled with rice");
dinner.inviteGuests("Georgi", "Peppers filled with beans");

console.log(dinner.showAttendance());
