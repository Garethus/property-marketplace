const { User, Property } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, { id }) => {
      const user = await User.findById(id);

      if (!user) {
        throw new Error('Cannot find a user with this id!');
      }

      return user;
    },
  },
  Mutation: {
    addUser: async (parent, { firstname, email, password }) => {
      const user = await User.create({ firstname, email, password });

      if (!user) {
        throw new Error('Something went wrong while creating the user!');
      }

      const token = signToken(user);
      return { token, user };
    },
  }
};

module.exports = resolvers;
