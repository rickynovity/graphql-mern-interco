import { gql } from "@apollo/client";

export const GET_TRAINERS = gql`
  query getTrainers {
    trainers {
      _id
      name
      biography
      contact {
        email
        phone
      }
    }
  }
`;
