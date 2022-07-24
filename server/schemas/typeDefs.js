const { gql } = require('apollo-server-express');

    //MUTATIONS TO ADD BACK IN LATER
    // addPost(postData: PostInput!): User
    // addComment(commentData: CommentInput!): User
    // removePost(postID: ID!): User
    // removeComment(commentID: ID!): User
    // createSetlist(setlistID: ID!): User

const typeDefs = gql`
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}
type User {
    _id: ID!
    username: String!
    email: String
    name: String
    phoneNumber:
    ageVerified: Boolean
    isAdmin: Boolean
    Posts: [Post]
    comments: [Comment]
    setlists: [Setlist]
}
type Comment{
    _id: ID!
    commentBody: String!
    username: String!
    createdAt: String!
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
    city: String!
    state: String!
    set: String!
}
type Query {
    users: [User]
}
`;

module.exports = typeDefs;