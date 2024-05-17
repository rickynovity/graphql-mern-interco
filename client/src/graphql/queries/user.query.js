import { gql } from "@apollo/client";

export const GET_AUTHENTICATED_USER = gql`
  query GetAuthenticatedUser {
    authUser {
      _id
      fullName
      email
      profilePicture
      gender
    }
  }
`;

export const GET_FORMATIONS_BY_USER = gql`
  query getUser($userId: ID!) {
    user(id: $userId) {
      _id
      fullName
      email
      password
      profilePicture
      gender
      formations {
        _id
        objectives
        title
        source
        progress
        startDate
        endDate
        category {
          _id
          name
        }
        status {
          _id
          name
        }
        language {
          _id
          name
        }
        trainer {
          _id
          name
          biography
          contact {
            email
            phone
          }
        }
        tagNames {
          _id
          name
        }
        user {
          _id
          fullName
          formations {
            _id
            title
          }
        }
      }
    }
  }
`;
