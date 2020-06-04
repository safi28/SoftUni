const express = require("express");
const indexRouter = require("./routes");
const dbConnector = require("./config/db");

dbConnector()
  .then(() => {
    const config = require("./config/config");
    const app = express();
    require("./config/express")(app);
    app.use("/", indexRouter);
    app.listen(
      config.port,
      console.log(`Listening on port ${config.port}! Now its up to you...`)
    );
  })
  .catch(console.error);