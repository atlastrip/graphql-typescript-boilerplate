import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  type Book {
    id: ID!
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;
