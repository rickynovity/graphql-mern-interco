import { gql } from "graphql-tag";

const tagNameTypeDef = gql`
  type TagName {
    _id: ID!
    name: String
    formation: Formation!
  }

  type Query {
    tagNames: [TagName!]
    tagName(id: ID!): TagName
  }

  type Mutation {
    createTagName(input: CreateTagNameInput!): TagName!
    deleteTagName(id: ID!): TagName!
    deleteTagNames: [TagName!]
    updateTagName(input: UpdateTagNameInput!): TagName!
  }

  input CreateTagNameInput {
    name: String!
    formationId: ID!
  }

  input UpdateTagNameInput {
    tagNameId: ID!
    name: String!
    formationId: ID!
  }
`;
export default tagNameTypeDef;
