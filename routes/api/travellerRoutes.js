const router = require("express").Router();
const { Traveller, Trip, Location } = require("../../models");

//Get all travellers route
router.get("/", async (req, res) => {
  try {
    const travellerData = await Traveller.findAll();
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500), json(err);
  }
});
