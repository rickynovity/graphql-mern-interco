import { gql } from "graphql-tag";

const languageTypeDef = gql`
  type Language {
    _id: ID!
    name: String
  }

  type Query {
    languages: [Language!]
    language(id: ID!): Language
  }

  type mutation {
    createLanguage(input: CreateLanguageInput!): Language!
    deleteLanguage(id: ID!): Language!
    deleteLanguages: [Language!]
    updateLanguage(id: ID!, input: UpdateLanguageInput!): Language!
  }

  input CreateLanguageInput {
    name: String!
  }

  input UpdateLanguageInput {
    languageId: ID!
    name: String!
  }
`;
export default languageTypeDef;
