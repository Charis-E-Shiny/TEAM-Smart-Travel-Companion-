// backend/controllers/cuisineController.js
const Cuisine = require('../models/Cuisine');

exports.getAllCuisines = async (req, res) => {
  try {
    const cuisines = await Cuisine.find();
    res.json(cuisines);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
