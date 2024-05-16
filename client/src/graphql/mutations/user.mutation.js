import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation signUp($input: SignUpInput!) {
    signUp(input: $input) {
      _id
      fullName
      email
      profilePicture
      gender
    }
  }
`;

export const LOGIN = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      _id
      fullName
      email
      profilePicture
      gender
    }
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout {
      message
    }
  }
`;
