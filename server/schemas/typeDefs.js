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
    properties: [Property]
    property(propertyId: ID!): Property
    propertiesByState(state: String!): [Property]
  }

  input PropertyInput {
    propertyId: String
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

  type Mutation {
    addUser(firstname: String!, lastname: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveProperty(property: PropertyInput!): User
    removeProperty(property: PropertyInput!): User
  }
`;

module.exports = typeDefs;
