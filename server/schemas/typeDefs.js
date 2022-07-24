const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postData: PostInput!): User
    addComment(commentData: CommentInput!): User
    removePost(postID: ID!): User
    removeComment(commentID: ID!): User
    createSetlist(setlistID: ID!): User
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
    createdAt: Date!
}
type Post{
    _id: ID!
    body: String!
    title: String!
    createdAt: Date
    username: String!
    comments: [comment]
}
type Setlist{
    _id: ID!
    date: Date!
    artist: String!
    venue: String!
    city: String!
    state: String!
    set: String!
}
`;

module.exports = typeDefs;