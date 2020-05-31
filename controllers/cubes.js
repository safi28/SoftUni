const fs = require("fs");
const { getCube } = require("./database");

const getAllCubes = (callback) => {
  getAllCubes((cubes) => {
    callback(cubes);
  });
};
