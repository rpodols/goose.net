import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_SETLIST = gql`
query setlist($id: ID!) {
  setlist(_id: $id) {
    _id
    date
    artist
    venue
    city
    state
    set
    user {
      _id
      username
    }
  }

}`