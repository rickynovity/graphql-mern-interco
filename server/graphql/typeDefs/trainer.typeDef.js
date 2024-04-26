import { gql } from "graphql-tag";

const trainerTypeDef = gql`
  type Trainer {
    _id: ID!
    name: String
    biography: String
    contact: TrainerContact
  }

  type Query {
    trainers: [Trainer!]
    trainer(id: ID!): Trainer
  }

  type mutation {
    createTrainer(input: CreateTrainerInput!): Trainer!
    deleteTrainer(id: ID!): Trainer!
    deleteTrainers: [Trainer!]
    updateTrainer(id: ID!, input: UpdateTrainerInput!): Trainer!
  }

  type TrainerContact {
    email: String
    phone: String
  }

  input CreateTrainerInput {
    name: String!
  }

  input UpdateTrainerInput {
    trainerId: ID!
    name: String!
  }
`;
export default trainerTypeDef;
