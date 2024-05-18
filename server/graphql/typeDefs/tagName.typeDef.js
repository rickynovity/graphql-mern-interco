import { gql } from "graphql-tag";

const tagNameTypeDef = gql`
  type TagName {
    _id: ID!
    name: String
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
  }

  input UpdateTagNameInput {
    tagNameId: ID!
    name: String!
  }
`;
export default tagNameTypeDef;
