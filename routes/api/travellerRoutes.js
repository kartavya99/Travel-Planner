const router = require("express").Router();
const { Traveller, Trip, Location } = require("../../models");
const { getAttributes } = require("../../models/Traveller");

//Get all travellers route
router.get("/", async (req, res) => {
  try {
    const travellerData = await Traveller.findAll();
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500), json(err);
  }
});

// GET a single traveller
route /
  getAttributes("/:id", async (req, res) => {
    try {
      const travellerData = await Traveller.findByPk(req.params.id, {
        // JOIN with locations, using the Trip through table
        include: [{ model: Location, through: Trip, as: "planned_trips " }],
      });

      if (!travellerData) {
        res.status(404).json({ message: "No traveller found with this id!" });
        return;
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

// DELETE a traveller
router.delete("/:id", async (req, res) => {
  try {
    const travellerData = await Traveller.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!travellerData) {
      res.status(404).json({ message: "No traveller found with this id!" });
      return;
    }
  } catch (err) {
    res.status(500), json(err);
  }
});

module.exports = router;
