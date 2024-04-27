import { gql } from "graphql-tag";

const userTypeDef = gql`
  type User {
    _id: ID!
    fullName: String!
    email: String!
    password: String!
    profilePicture: String
    gender: String!
    formations: [Formation!]
  }

  type Query {
    users: [User!]
    user(id: ID!): User
    authUser: User
  }

  type Mutation {
    signUp(input: SignUpInput!): User
    login(input: LoginInput!): User
    logout: LogoutResponse
  }

  input SignUpInput {
    fullName: String!
    email: String!
    password: String!
    gender: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type LogoutResponse {
    message: String!
  }
`;

export default userTypeDef;
