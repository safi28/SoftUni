const fs = require("fs");
const path = require("path");

const dbFileName = path.normalize(__dirname, "/config/database.json");

const saveCube = (cube, callback) => {
  getCubes((cubes) => {
    cubes.push(cube);
    fs.writeFile(dbFileName, JSON.stringify(cubes), (error) => {
      if (error) throw error;
      console.log("New cube is added!");
      callback(cube);
    });
  });
};

const getCube = (id, callback) => {
  getCubes((cb) => {
    const cube = cb.filter((c) => c.id === id);
    callback(cube);
  });
};
const getCubes = (callback) => {
  fs.readFile(dbFileName, (err, data) => {
    if (err) throw err;
    const cubes = JSON.parse(data);
    callback(cubes);
  });
};

module.exports = {
  getCubes,
  saveCube,
  getCube,
};