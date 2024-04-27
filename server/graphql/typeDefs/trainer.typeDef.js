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

  type Mutation {
    createTrainer(input: CreateTrainerInput!): Trainer!
    deleteTrainer(id: ID!): Trainer!
    deleteTrainers: [Trainer!]
    updateTrainer(input: UpdateTrainerInput!): Trainer!
  }

  type TrainerContact {
    email: String
    phone: String
  }

  input TrainerContactInput {
    email: String
    phone: String
  }

  input CreateTrainerInput {
    name: String!
    biography: String
    contact: TrainerContactInput
  }

  input UpdateTrainerInput {
    trainerId: ID!
    name: String!
    biography: String
    contact: TrainerContactInput
  }
`;
export default trainerTypeDef;
