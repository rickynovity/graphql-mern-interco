import { gql } from "@apollo/client";

export const GET_LANGUAGES = gql`
  query getLanguages {
    languages {
      _id
      name
    }
  }
`;
