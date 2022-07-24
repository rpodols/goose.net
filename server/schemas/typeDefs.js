const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savePost(postData: savePost!): User
    addComment(commentData: addComment!): User
    removePost(postID: ID!): User
    removeComment(commentID: ID!): User
    saveSetlist(setlistID: ID!): User
    removeSetlist(setlistID: ID!): User
}
type User {
    _id: ID!
    username: String!
    email: String
    Posts: [Post]
    comments: [Comment]
    Setlists: [Setlist]
}
type Comment{
    _id: ID!
    commentBody: String!
    username: String!
}
type Post{
    _id: ID!
    title: String!
    body: String!
    username: String!
    comments: [Comment]
}
type Setlist{
    _id: ID!
    artist: String!
    venue: String!
    city: String!
    state: String!
    set: String!
}
input savePost {
    title: String!
    body: String!
    username: String!
}
input addComment {
    commentBody: String!
    username: String!
}
input saveSetlist {
    artist: String!
    venue: String!
    city: String!
    state: String!
    set: String!
}
type Query {
    me: User
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;