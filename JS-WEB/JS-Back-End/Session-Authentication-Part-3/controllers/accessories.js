const { accessoryModel, cubeModel } = require("../models");

const getAccessories = async () => {
  const accessories = await accessoryModel.find().lean();
  return accessories;
};

const postAccessories = async (id, accessoryId) => {
  await cubeModel.findByIdAndUpdate(id, {
    $addToSet: {
      accessories: accessoryId
    }
  })
};

module.exports = { getAccessories, postAccessories };
