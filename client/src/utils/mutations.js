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
  mutation addUser($username: String!, $email: String!, $password: String!, $ageVerified: Boolean! $isAdmin: Boolean) {
    addUser(username: $username, email: $email, password: $password, ageVerified: $ageVerified, isAdmin:$isAdmin) {
      token
      user {
        _id
        username
        isAdmin
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
  mutation addSetlist($date: String!, $artist: String!, $venue: String!, $location: String!, $setOneSongList: String!, $setTwoSongList: String!, $encoreSongList: String!) {
    addSetlist(date: $date, artist: $artist, venue: $venue, location: $location, setOneSongList: $setOneSongList, setTwoSongList: $setTwoSongList, encoreSongList: $encoreSongList) {
      _id
      date
      artist
      venue
      location
      setOneSongList
      setTwoSongList
      encoreSongList
    }
  }
`

export const EDIT_SETLIST = gql`
  mutation editSetlist($setlistId: ID!, $date: String!, $artist: String!, $venue: String!, $location: String!, $setOneSongList: String!, $setTwoSongList: String!, $encoreSongList: String!) {
    editSetlist(setlistId: $setlistId, date: $date, artist: $artist, venue: $venue, location: $location, setOneSongList: $setOneSongList, setTwoSongList: $setTwoSongList, encoreSongList: $encoreSongList) {
      _id
      date
      artist
      venue
      location
      setOneSongList
      setTwoSongList
      encoreSongList
    }
  }
`

export const DELETE_SETLIST = gql`
  mutation deleteSetlist($setlistId: ID!) {
    deleteSetlist(setlistId: $setlistId) {
      _id
      date
      artist
      venue
      location
      setOneSongList
      setTwoSongList
      encoreSongList
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