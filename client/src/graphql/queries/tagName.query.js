import { gql } from "@apollo/client";

export const GET_STACK_NAME = gql`
  query getTagNames {
    tagNames {
      _id
      name
    }
  }
`;
