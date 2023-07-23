import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      firstname
      lastname
      email
      properties {
        _id
        street
        suburb
        state
        postcode
        bed
        bathroom
        car
        landsize
        price
        type
        category
        image
      }
    }
  }
`;

export const QUERY_PROPERTIES = gql`
  query getProperties {
    properties {
      _id
      street
      suburb
      state
      postcode
      bed
      bathroom
      car
      landsize
      price
      type
      category
      image
    }
  }
`;

export const QUERY_SINGLE_PROPERTY = gql`
  query getSingleProperty($propertyId: ID!) {
    property(propertyId: $propertyId) {
      _id
      street
      suburb
      state
      postcode
      bed
      bathroom
      car
      landsize
      price
      type
      category
      image
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstname
      lastname
      email
      properties {
        _id
        street
        suburb
        state
        postcode
        bed
        bathroom
        car
        landsize
        price
        type
        category
        image
      }
    }
  }
`;
