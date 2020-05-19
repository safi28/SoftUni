const mathEnforcer = require("./index");

let expect = require("chai").expect;

describe("mathEnforcer", function() {
  describe("addFive", function() {
    it("should return undefined with non-number param", function() {
      let param = mathEnforcer.addFive("sth");
      expect(param).to.undefined;;
      it("should return 10", function() {
        let param = mathEnforcer.addFive(5);
        expect(param).to.equal(10);
      });

      it("should return num.75 + 5", function() {
        let param = mathEnforcer.addFive(3.75);
        expect(param).to.equal(8.75);
      });
    });
    it("should return num + 5", function() {
      let param = mathEnforcer.addFive(1);
      expect(param).to.equal(6);
    });
    it("should return -num + 5", function() {
      let param = mathEnforcer.addFive(-10);
      expect(param).to.equal(-5);
    });
    it("negative floating num", function() {
      let param = mathEnforcer.addFive(-15.25);
      expect(param).to.equal(-10.25, 0.01);
    });
  });

  describe("subtractTen", function() {
    it("should return undefined with non-number param", function() {
      let param = mathEnforcer.subtractTen("gosho");
      expect(param).to.be.undefined
    });

    it("negative", function() {
      let param = mathEnforcer.subtractTen(-15);
      expect(param).to.equal(-25);
    });
    it("positive", function() {
      let param = mathEnforcer.subtractTen(20);
      expect(param).to.equal(10);
    });
    it("negative floating number", function() {
      let param = mathEnforcer.subtractTen(5.15);
      expect(param).to.equal(-4.85, 0.01);
    });
  });

  describe("sum", function() {
    it("first undefined", function() {
      let values = mathEnforcer.sum("sth", 20);
      expect(values).to.be.undefined
    });
    it("second undefined", function() {
      let values = mathEnforcer.sum(10, "sth");
      expect(values).to.be.undefined
    });
    it("integer sum", function() {
      let values = mathEnforcer.sum(10, 20);
      expect(values).to.equal(30);
    });
    it("negative sum", function() {
      let values = mathEnforcer.sum(-10, -20);
      expect(values).to.equal(-30);
    });
    it("floating sum", function() {
      let values = mathEnforcer.sum(4.2, 2.4);
      expect(values).to.equal(6.6, 0.01);
    });
    it("negative floating sum", function() {
      let values = mathEnforcer.sum(-4.2, -2.4);
      expect(values).to.equal(-6.6, 0.01);
    });
  });
});
