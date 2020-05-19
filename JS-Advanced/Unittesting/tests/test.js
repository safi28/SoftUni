const StringBuilder = require("./index");

let expect = require("chai").expect;

describe("StringBuilder", function() {
  it("arr of string", function() {
    let expected = new StringBuilder("str");
    expect(expected._stringArray).to.eql(["s", "t", "r"]);
  });
  it("empty arr", function() {
    let expected = new StringBuilder();
    expect(expected._stringArray).to.eql([]);
  });
  it("append", function() {
    let expected = new StringBuilder("str");
    expected.append("ing");
    expect(expected._stringArray).to.eql(["s", "t", "r", "i", "n", "g"]);
  });
  it("append", function() {
    let expected = new StringBuilder();
    expected.append("ing");
    expect(expected._stringArray).to.eql(["i", "n", "g"]);
  });
  it("prepend", function() {
    let expected = new StringBuilder("ing");
    expected.prepend("str");
    expect(expected._stringArray).to.eql(["s", "t", "r", "i", "n", "g"]);
  });
  it("prepend", function() {
    let expected = new StringBuilder();
    expected.prepend("str");
    expect(expected._stringArray).to.eql(["s", "t", "r"]);
  });
  it("insertAt", function() {
    let expected = new StringBuilder("heyy");
    expected.insertAt("bug", 1);
    expect(expected._stringArray[1]).to.equal("b");
  });
  it("remove", function() {
    let expected = new StringBuilder("abc");
    expected.remove(0, 1);
    expect(expected._stringArray[0]).to.equal("b");
  });
  it("toString", function() {
    let expected = new StringBuilder("abc");
    expect(expected.toString()).to.equal("abc");
  });
  it("throw Error for non-string value", function() {
    expect(() => StringBuilder._vrfyParam(true)).to.throw(
      TypeError,
      "Argument must be string"
    );
  });
});
