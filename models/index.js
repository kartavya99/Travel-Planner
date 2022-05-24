const Traveller = require("./Traveller");
const Location = require("./Locations");
const Trip = require("./Trips");

Traveller.belongsToMany(Location, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false,
  },
  // Define as alias for when data is retrieved
  as: "planeed_trips",
});

Location.belongsToMany(Traveller, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false,
  },
  //Define an alias for when data is retrieved
  as: "location_travellers",
});

module.exports = { Traveller, Location, Trip };
