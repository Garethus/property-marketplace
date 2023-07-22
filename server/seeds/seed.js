const db = require('../config/connection');
const { User, Property } = require('../models');
const userSeeds = require('./userSeeds.json');
const propertySeeds = require('./propertySeeds.json');

db.once('open', async () => {
    await Property.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Property.create(propertySeeds);

    console.log('all done!');
    process.exit(0);
});
