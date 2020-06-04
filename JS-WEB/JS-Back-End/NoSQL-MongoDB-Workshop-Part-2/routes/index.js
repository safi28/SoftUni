const { Router } = require("express");
const { cubeController, accessoryController } = require("../controllers");
const { cubeModel, accessoryModel } = require("../models");
const router = Router();

router.get("/", cubeController.index);

router.get("/attach/accessory/:id", accessoryController.attachGet);
router.post("/attach/accessory/:id", accessoryController.attachPost);

router.get("/create", (req, res) => {
  res.render("create", {
    title: "Create Cube | Cube Workshop",
  });
});

router.post("/create", (req, res) => {
  const { name, description, imageUrl, difficulty } = req.body;
  cubeModel.create({ name, description, imageUrl, difficulty }).then((cube) => {
    console.log(cube);
    res.redirect("/");
  });
});

router.get("/details/:id", cubeController.details);

router.get("/create/accessory", (req, res) => {
  res.render("createAccessory", {
    title: "Create Accessory | Cube Workshop",
  });
});
router.post("/create/accessory", (req, res) => {
  const { name, description, imageUrl, difficulty } = req.body;
  accessoryModel
    .create({ name, description, imageUrl, difficulty })
    .then((created) => {
      console.log(created);
      res.redirect("/");
    })
    .catch(console.error);
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About | Cube Workshop",
  });
});
router.get("/delete", cubeController.deleteCube);
router.get("*", (req, res) => {
  res.render("404", {
    title: "Error | Cube Workshop",
  });
});

module.exports = router;
