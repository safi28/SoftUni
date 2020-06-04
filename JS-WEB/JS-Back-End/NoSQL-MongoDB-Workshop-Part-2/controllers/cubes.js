const { cubeModel } = require("../models");

function index(req, res, next) {
  const { from, to, search } = req.query;
  let query = {};
  if (search) {
    query = { ...query, name: { $regex: search } };
  }
  if (to) {
    query = { ...query, difficultyLevel: { $lte: +to } };
  }
  if (from) {
    query = {
      ...query,
      difficultyLevel: { ...query.difficultyLevel, $gte: +from },
    };
  }

  cubeModel
    .find(query)
    .then((cubes) => {
      res.render("index.hbs", {
        cubes,
        search,
        from,
        to,
      });
    })
    .catch(next);
}

async function details(req, res, next) {
  const id = req.params.id;
  try {
    const cube = await cubeModel.findById(id).populate("accessories");
    if (!cube) {
      res.redirect("404.hbs");
      return;
    }
    res.render("details.hbs", { cube });
  } catch (e) {
    next(e);
  }
}

async function deleteCube(req, res, next) {
  const id = req.params.id;
  try {
    const cube = await cubeModel.findOneAndDelete(id);
    if (!cube) {
      res.redirect("404.hbs");
      return;
    }
    res.redirect("/");
  } catch (e) {
    next(e);
  }
}

module.exports = {
  index,
  details,
  deleteCube,
};
