const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    ageVerified: Boolean!
    isAdmin: Boolean
}
type Auth {
    token: ID!
    user: User
  }
type Post{
    _id: ID!
    body: String!
    title: String!
    createdAt: String
    username: String!
    comments: [Comment]
}
type Setlist{
    _id: ID!
    date: String!
    artist: String!
    venue: String!
    location: String!
    setOneSongList: String!
    setTwoSongList: String!
    encoreSongList: String!
    comments: [Comment]
}
type Comment {
    _id: ID!
    commentBody: String!
    username: String!
    createdAt: String!
}
type Query {
    me: User
    users: [User]
    user(username: String!): User
    setlists: [Setlist]
    setlist(_id: ID!): Setlist
    posts(username: String): [Post]
    post(_id: ID!): Post

}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, ageVerified: Boolean!, isAdmin: Boolean): Auth
    addSetlist(artist: String!, venue: String!, location: String!, setOneSongList: String!, setTwoSongList: String!, encoreSongList: String!, date: String!): Setlist
    addComment(setlistId: ID!, commentBody: String!): Setlist
    deleteSetlist(setlistId: ID!): Setlist
    updateSetlist(setlistId: ID!, artist: String!, venue: String!, location: String!, setOneSongList: String!, setTwoSongList: String!, encoreSongList: String!, date: String!): Setlist
}
`;

module.exports = typeDefs;