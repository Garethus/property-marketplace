const { User, Property } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    properties: async (parent, { email }) => {
      const params = email ? { email } : {};
      return Property.find(params);
    },
    property: async (parent, { propertyId }) => {
      return Property.findOne({ _id: propertyId });
    },
    propertiesByState: async (parent, { state }) => {
      return Property.find({ state: state });
    },
    me: async (parent, { id }) => {
      const user = await User.findById(id);

      if (!user) {
        throw new Error('Cannot find a user with this id!');
      }

      return user;
    },
  },
  Mutation: {
    addUser: async (parent, { firstname, lastname, email, password }) => {
      const user = await User.create({ firstname, lastname, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveProperty: async (parent, { propertyData }, context) => {
      if (context.user) {
        const thought = await Thought.create({
          thoughtText,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { thoughts: thought._id } }
        );

        return thought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeProperty: async (parent, { propertyId }, { user }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user.id },
        { $pull: { savedProperties: { propertyId } } },
        { new: true }
      );

      if (!updatedUser) {
        throw new Error("Couldn't find user with this id!");
      }

      return updatedUser;
    },
  }
};

module.exports = resolvers;
