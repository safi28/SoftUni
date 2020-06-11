const { Router } = require("express");
const {
  getAccessories,
  postAccessories,
} = require("../controllers/accessories");
const { getCube, getCubes, deleteCube } = require("../controllers/cubes");
const { cubeModel, userModel, tokenBlackList } = require("../models");
const Accessory = require("../models/accessory");
const router = Router();
const { createToken } = require("../utils/jwt");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const user = req.cookies['auth_cookie'];
  const cubes = await getCubes();
  res.render("index", {
    title: "Home Page",
    user,
    cubes,
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
    res.redirect("/");
  });
});

router.get("/details/:id", async (req, res) => {
  const cube = await getCube(req.params.id);
  res.render("details", {
    title: "Details Page",
    ...cube,
  });
});
router.get("/delete", async (req, res) => {
  await deleteCube(req.params.id);
  res.redirect("/");
});
router.get("/about", (req, res) => {
  res.render("partials/about", {
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
    title: 'Attach accessory',
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
router.get("/register", (req, res) => {
  res.render("authentication/registerPage", {
    title: "Register Page",
  });
});

router.post("/register", async (req, res) => {
  const { username, password, repeatPassword } = req.body;
  const user = new userModel({username, password});
  try {
     await user.save();
    res.redirect("/login");
  } catch (error) {
    res.status(400).redirect("error/404");
  }
});

router.get("/login", (req, res) => {
  res.render("authentication/loginPage", {
    title: "Login page",
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username });
  if (!user) {
    return res.status(401).redirect('error/401');
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).redirect('error/401');
  }
  const token = createToken({ id: user._id });
  res.cookie("auth_cookie", token).redirect("/");
});

router.get("/logout", (req, res) => {
  const token = req.cookies["auth_cookie"];  
  tokenBlackList.create({ token }).then(() => {
    res.clearCookie("auth_cookie").redirect("/");
  });
});

router.get("*", (req, res) => {
  res.render("error/404", {
    title: "Error | Cube Workshop",
  });
});

module.exports = router;
