const { Router } = require("express");
const {
  getAccessories,
  postAccessories,
} = require("../controllers/accessories");
const { getCube, getCubes, deleteCube } = require("../controllers/cubes");
const { cubeModel } = require("../models");
const Accessory = require("../models/accessory");
const router = Router();

router.get("/", async (req, res) => {
  const cubes = await getCubes();
  res.render("index", {
    cubes
  });
});

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

router.get("/details/:id", async (req, res) => {
  const cube = await getCube(req.params.id);
  res.render("details", {
    ...cube,
  });
});

router.get("/delete", async (req, res) => {
  await deleteCube(req.params.id);
  res.redirect("/");
});
router.get("/about", (req, res) => {
  res.render("about", {
    title: "About | Cube Workshop",
  });
});
router.get("/create/accessory", (req, res) => {
  res.render("createAccessory", {
    title: "Create Accessory | Cube Workshop",
  });
});
router.post("/create/accessory", async (req, res) => {
  const { name, description, imageUrl, difficulty } = req.body;
  const accessory = new Accessory({ name, description, imageUrl, difficulty });
  await accessory.save();
  res.redirect("/");
});

router.get("/attach/accessory/:id", async (req, res) => {
  const cube = await getCube(req.params.id);
  const accessories = await getAccessories();

  const cubeAccessories = cube.accessories.map((acc) =>
    acc._id.valueOf().toString()
  );

  const notAttachedAccessories = accessories.filter((acc) => {
    const accString = acc._id.valueOf().toString();
    return !cubeAccessories.includes(accString);
  });

  const attachAccessory =
    cube.accessories.length !== accessories.length && accessories.length > 0;

  res.render("attachAccessory", {
    ...cube,
    acccessories: notAttachedAccessories,
    attachAccessory,
  });
});
router.post("/attach/accessory/:id", async (req, res) => {
  const { accessory } = req.body;
  await postAccessories(req.params.id, accessory);
  res.redirect(`/details/${req.params.id}`);
});
router.get("*", (req, res) => {
  res.render("404", {
    title: "Error | Cube Workshop",
  });
});

module.exports = router;
