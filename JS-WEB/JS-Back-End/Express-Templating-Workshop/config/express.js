
const express = require("./node_modules/express");
const handlebars = require("express-handlebars");
const bodyParser = require("./node_modules/body-parser");

const handlebars = require("express-handlebars");
const express = require("express");

const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");


module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.engine(
    ".hbs",
    handlebars({
      extname: ".hbs",
    })
  );

  app.set("view engine", ".hbs");


  app.engine(".hbs", handlebars({ extname: ".hbs" }));
  app.set("view engine", ".hbs");

  app.use("/static", express.static("static"));
};
