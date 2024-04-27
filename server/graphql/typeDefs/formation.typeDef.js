import { gql } from "graphql-tag";

const formationTypeDef = gql`
  type Formation {
    _id: ID!
    objectives: String!
    title: String!
    source: String
    progress: Int
    startDate: String
    endDate: String
    category: Category
    status: Status
    language: Language
    trainer: Trainer
  }

  type Query {
    formations: [Formation!]
    formation(id: ID!): Formation
  }

  type Mutation {
    createFormation(input: CreateFormationInput!): Formation!
    deleteFormation(id: ID!): Formation!
    deleteFormations: [Formation!]
    updateFormation(input: UpdateFormationInput!): Formation!
  }

  input CreateFormationInput {
    objectives: String!
    title: String!
    source: String
    progress: Int
    startDate: String
    endDate: String
    categoryId: ID!
    statusId: ID!
    languageId: ID!
    trainerId: ID!
  }

  input UpdateFormationInput {
    formationId: ID!
    objectives: String!
    title: String!
    source: String
    progress: Int
    startDate: String
    endDate: String
    categoryId: ID!
    statusId: ID!
    languageId: ID!
    trainerId: ID!
  }
`;
export default formationTypeDef;
