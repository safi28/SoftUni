const { v4 } = require("uuid");
const { saveCube, getCubes } = require("../controllers/database");

class Cube {
  constructor(name, description, imageUrl, difficulty) {
    this.id = v4();
    this.name = name || "No name";
    this.description = description;
    this.imageUrl = imageUrl || "placeholder";
    this.difficulty = difficulty || 0;
  }
  save(callback) {
    const newCube = {
      id: this.id,
      name: this.name,
      description: this.description,
      imageUrl: this.imageUrl,
      difficulty: this.difficulty,
    };
    saveCube(newCube, callback);
  }
  findCube(fn) {
    return Promise.resolve(getCubes((cb) => cb.filter(fn)));
  }
}

module.exports = Cube;
