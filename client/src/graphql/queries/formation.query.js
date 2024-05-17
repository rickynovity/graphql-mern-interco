import { gql } from "@apollo/client";

export const GET_FORMATIONS = gql`
  query getFormations {
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
`;

export const GET_FORMATION = gql`
  query getFormation($formationId: ID!) {
    formation(id: $formationId) {
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
`;
