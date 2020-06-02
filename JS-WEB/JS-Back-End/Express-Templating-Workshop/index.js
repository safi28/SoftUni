const env = process.env.NODE_ENV || "development";

<<<<<<< Updated upstream
const config = require('./config/config')[env];
const app = require('./node_modules/express')();
=======
const config = require("./config/config")[env];
const express = require("express");
const indexRouter = require("./routes");
const app = express();
>>>>>>> Stashed changes

require("./config/express")(app);

app.use("/", indexRouter);

app.listen(
  config.port,
  console.log(`Listening on port ${config.port}! Now its up to you...`)
);
