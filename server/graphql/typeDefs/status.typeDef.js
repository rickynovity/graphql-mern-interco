import { gql } from "graphql-tag";

const statusTypeDef = gql`
  type Status {
    _id: ID!
    name: String
  }

  type Query {
    allstatus: [Status!]
    status(id: ID!): Status
  }

  type Mutation {
    createStatus(input: CreateStatusInput!): Status!
    deleteStatus(id: ID!): Status!
    deleteAllStatus: [Status!]
    updateStatus(input: UpdateStatusInput!): Status!
  }

  input CreateStatusInput {
    name: String!
  }

  input UpdateStatusInput {
    statusId: ID!
    name: String!
  }
`;
export default statusTypeDef;
