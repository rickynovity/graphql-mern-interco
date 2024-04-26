import { gql } from "graphql-tag";

const categoryTypeDef = gql`
  type Category {
    _id: ID!
    name: String
  }

  type Query {
    categories: [Category!]
    category(id: ID!): Category
  }

  type mutation {
    createCategory(input: CreateCategoryInput!): Category!
    deleteCategory(id: ID!): Category!
    deleteCategories: [Category!]
    updateCategory(id: ID!, input: UpdateCategoryInput!): Category!
  }

  input CreateCategoryInput {
    name: String!
  }

  input UpdateCategoryInput {
    categoryId: ID!
    name: String!
  }
`;
export default categoryTypeDef;
