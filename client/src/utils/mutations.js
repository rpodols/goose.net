import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $ageVerified: Boolean!) {
    addUser(username: $username, email: $email, password: $password, ageVerified: $ageVerified) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($body: String!, $title: String!) {
    addPost(body: $body, title: $title) {
      _id
      body
      title
      createdAt
      username
      comments {
        _id
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($setlistId: ID!, $commentBody: String!) {
    addComment(setlistId: $setlistId, commentBody: $commentBody) {
      _id
      commentCount
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_SETLIST = gql`
  mutation addSetlist($date: String!, $artist: String!, $venue: String!, $location: String!, $set: String!, $songList: String!) {
    addSetlist(date: $date, artist: $artist, venue: $venue, location: $location, set: $set, songList: $songList) {
      _id
      date
      artist
      venue
      location
      setOneSongList
    }
  }
`

// export const ADD_SETLIST = gql`
//   mutation addSetlist($userId: ID!, $setlist_id: ID!) {
//     addSetlist(userID: $userId, setlistId: $setlistId) {
//       _id
//       date
//       artist
//       venue
//       city
//       state
//       set
//       user {
//         _id
//         username
//       }
//     }
//   }
// `