import { gql } from "graphql-tag";

const statusTypeDef = gql`
  type Status {
    _id: ID!
    name: String
  }

  type Query {
    statuses: [Status!]
    status(id: ID!): Status
  }

  type mutation {
    createStatus(input: CreateStatusInput!): Status!
    deleteStatus(id: ID!): Status!
    deleteStatuses: [Status!]
    updateStatus(id: ID!, input: UpdateStatusInput!): Status!
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
