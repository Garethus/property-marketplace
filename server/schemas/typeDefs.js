const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    firstname: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(firstname: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
