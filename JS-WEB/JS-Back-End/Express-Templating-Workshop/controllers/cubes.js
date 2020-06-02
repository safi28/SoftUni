const fs = require("fs");
const { getCube } = require("./database");

const getAllCubes = (callback) => {
  getAllCubes((cubes) => {
    callback(cubes);
  });
};
const { getCubes } = require("./database");

const getAllCubes = (callback) => {
  getCubes((cubes) => {
    callback(cubes);
  });
};

module.exports = { getAllCubes };
