import { gql } from "graphql-tag";

const categoryTypeDef = gql`
  type Category {
    _id: ID!
    name: String
  }

  type Query {
    categories: [Category!]
    category(categoryId: ID!): Category
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category!
    deleteCategory(categoryId: ID!): Category!
    deleteCategories: [Category!]
    updateCategory(input: UpdateCategoryInput!): Category!
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
