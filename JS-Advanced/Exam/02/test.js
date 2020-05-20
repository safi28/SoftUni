const ChristmasMovies = require("./index.js");

const expect = require("chai").expect;

describe("ChristmasMovies", function() {
  describe("constructor", function() {
    it("constructor params", function() {
      let param = new ChristmasMovies();

      expect(param.movieCollection).to.eql([]);
      expect(param.watched).to.eql({});
      expect(param.actors).to.eql([]);
    });
  });

  describe("functions", function() {
    it("buyMovie", function() {
      let param = new ChristmasMovies();
      expect(param.buyMovie("Home Alone 2", ["Macaulay Culkin"])).to.deep.equal(
        "You just got Home Alone 2 to your collection in which Macaulay Culkin are taking part!"
      );
      expect(param.movieCollection).to.deep.equal([
        { name: "Home Alone 2", actors: ["Macaulay Culkin"] }
      ]);
      expect(() =>
        param
          .buyMovie("Home Alone 2", ["Macaulay Culkin"])
          .to.throw(Error, `You already own Home Alone 2 in your collection!`)
      );

      expect(
        param.buyMovie("The Grinch", [
          "Benedict Cumberbatch",
          "Pharrell Williams"
        ])
      ).to.equal(
        "You just got The Grinch to your collection in which Benedict Cumberbatch, Pharrell Williams are taking part!"
      );

      expect(param.watchMovie("Home Alone 2")).to.equal(undefined);
      expect(param.watched).to.deep.equal({ "Home Alone 2": 1 });
      expect(param.watchMovie("Home Alone 2")).to.equal(undefined);
      expect(param.watched).to.deep.equal({ "Home Alone 2": 2 });

      expect(() =>
        param
          .discardMovie("The Grinch")
          .to.throw(Error, "The Grinch is not at your collection!")
      );
      expect(() =>
        param
          .discardMovie("The Grinch")
          .to.throw(Error, "The Grinch is not watched!")
      );
      expect(() =>
        param
          .watchMovie("a")
          .to.throw(Error, "No such movie in your collection!")
      );
      expect(param.favouriteMovie()).to.equal(
        "Your favourite move is Home Alone 2 and you have watched it 2 times!"
      );
      expect(() =>
        param
          .favouriteMovie()
          .to.throw(Error, "You have not watched a movie yet this year!")
      );

      expect(param.discardMovie("Home Alone 2")).to.equal(
        "You just threw away Home Alone 2!"
      );

   

      expect(param.mostStarredActor()).to.equal(
        "The most starred actor is Benedict Cumberbatch and starred in 1 movies!"
      );
    });

  });
});
