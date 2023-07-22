const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstname: String
    lastname: String
    email: String
    password: String
    savedProperties: [Property]!
  }

  type Property {
    _id: ID
    street: String
    suburb: String
    state: String
    postcode: Int
    bed: Int
    bathroom: Int
    car: Int
    landsize: Int
    price: Int
    type: String
    category: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    properties: [Property]
    property(propertyId: ID!): Property
    propertiesByState(state: String!): [Property]
  }

  type Mutation {
    addUser(firstname: String!, lastname: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveProperty(propertyId: ID!): Property
    removeProperty(propertyId: ID!): Property
  }
`;

module.exports = typeDefs;
