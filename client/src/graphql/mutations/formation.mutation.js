import { gql } from "@apollo/client";

export const CREATE_FORMATION = gql`
  mutation createFormation($input: CreateFormationInput!) {
    createFormation(input: $input) {
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

export const DELETE_FORMATION = gql`
  mutation deleteFormation($deleteFormationId: ID!) {
    deleteFormation(id: $deleteFormationId) {
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

export const UPDATE_FORMATION = gql`
  mutation updateFormation($input: UpdateFormationInput!) {
    updateFormation(input: $input) {
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
