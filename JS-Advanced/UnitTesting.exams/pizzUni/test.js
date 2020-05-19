const PizzUni = require("./index");

const expect = require("chai").expect;

describe("pizzUni", function() {
  describe("constructor", function() {
    it("instances", function() {
      let param = new PizzUni();
      expect(param).to.be.an.instanceOf(PizzUni);
      expect(param).to.be.a("object");
      expect(param.registeredUsers).to.deep.equal([]);
      expect(param.availableProducts).deep.equal({
        pizzas: ["Italian Style", "Barbeque Classic", "Classic Margherita"],
        drinks: ["Coca-Cola", "Fanta", "Water"]
      });
      expect(param.orders).to.deep.equal([]);
    });
  });

  describe("registerUser", function() {
    it("return non existing user", function() {
      const param = new PizzUni();
      const user = param.registerUser("someone");
      expect(user).to.deep.equal({ email: "someone", orderHistory: [] });
      expect(user.email).equal("someone");
    });
    it("should throw error", function() {
      const param = new PizzUni();
      param.registerUser("someone");
      expect(() => param.registerUser("someone")).to.throw(
        Error,
        `This email address (someone) is already being used!`
      );
    });
  });

  describe("makeAnorder", function() {
    it("should throw an error for non existing user", function() {
      const param = new PizzUni();
      param.registerUser("sth");
      expect(() => param.makeAnOrder("someone", "pizza", "drinks")).to.throw(
        Error,
        "You must be registered to make orders!"
      );
    });
    it("should throw an error for not including this pizza", function() {
      const param = new PizzUni();
      param.registerUser("sth");
      expect(() =>
        param.makeAnOrder("sth", "Pizza Classic", "Coca-Cola")
      ).to.throw(Error, "You must order at least 1 Pizza to finish the order.");
    });
    it("useOrder", function() {
      const param = new PizzUni();
      param.registerUser("sth");
      let orders = param.makeAnOrder("sth", "Classic Margherita", "Water");
      expect(param.registeredUsers[0].orderHistory).to.deep.equal([
        { orderedDrink: "Water", orderedPizza: "Classic Margherita" }
      ]);
      expect(orders).to.equal(0);
      expect(param.orders).to.deep.equal([
        {
          orderedPizza: "Classic Margherita",
          orderedDrink: "Water",
          email: "sth",
          status: "pending"
        }
      ]);
    });
    it("change status", function() {
      const param = new PizzUni();
      param.registerUser("sth");
      let order = param.makeAnOrder("sth", "Classic Margherita", "Water");
      expect(param.orders.length).to.equal(1);
      expect(param.completeOrder()).to.deep.equal({
        orderedPizza: "Classic Margherita",
        orderedDrink: "Water",
        email: "sth",
        status: "completed"
      });
    });
    it("detail about the order", function() {
      const param = new PizzUni();
      param.registerUser("sth");
      let order = param.makeAnOrder("sth", "Classic Margherita", "Water");
      expect(param.detailsAboutMyOrder(0)).to.equal(
        `Status of your order: pending`
      );
    });
    it("should exist", function() {
      const param = new PizzUni();
      param.registerUser("sth");
      let order = param.makeAnOrder("sth", "Classic Margherita", "Water");
      expect(param.doesTheUserExist("sth")).to.deep.equal({
        email: "sth",
        orderHistory: [
          { orderedPizza: "Classic Margherita", orderedDrink: "Water" }
        ]
      });
    });
  });
});
