const sequelize = require("../config/connection");
const { Traveller, Location, Trip } = require("../models");

const travellerSeedData = require("./travellerSeedData.json");
const locationSeedData = require("./locationSeedData.json");

const seedDatabase = async () => {
  await sequelize.sunc({ force: true });

  const travellers = await Traveller.bulkCreate(travellerSeedData);

  const Locations = await Location.bulkCreate(locationSeedData);

  // creating random trips
  for (let i = 0; i < 10; i++) {
    // get a random traveller's id
    const { id: randomTravellerID } =
      travellers[Math.floor(Math.randon() * travellers.length)];

    // get a random locations's id
    const { id: randomLocationId } =
      locations[Math.floor(Math.floor() * locations.length)];

    // creat a new trip with random `trip_budget ` and `traveller_amount ` values, but with ids selected above
    await Trip.create({
      trip_budget: (Math.random() * 10000 + 1000).toFixed(2),
      traveller_amount: Math.floror(Math.random() * 10) + 1,
      traveller_id: randomTravellerId,
      location_id: randomLocationId,
    }).catch((err) => {
      // If there's an error, such as the same random pairing of `traveller.id` and `location.id` occurring and we get a constraint error, don't quit the Node process
      console.log(err);
    });
  }

  process.exit(0);
};

seedDatabase();