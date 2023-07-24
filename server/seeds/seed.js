const db = require('../config/connection');
const { User, Property } = require('../models');
const userSeeds = require('./userSeeds.json');
const propertySeeds = require('./propertySeeds.json');

db.once('open', async () => {
    try {
      await Property.deleteMany({});
      await User.deleteMany({});
  
      await Property.create(propertySeeds);
      await User.create(userSeeds);
  
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('all done!');
    process.exit(0);
  });
  