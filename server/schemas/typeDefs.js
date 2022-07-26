const { gql } = require('apollo-server-express');

    //MUTATIONS TO ADD BACK IN LATER
    // addPost(postData: PostInput!): User
    // addComment(commentData: CommentInput!): User
    // removePost(postID: ID!): User
    // removeComment(commentID: ID!): User
    // createSetlist(setlistID: ID!): User

    //re-add isAdmin: Boolean to User
    //       posts: [Post]
    //       comments: [Comment]
    //       setlists: [Setlist]

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    ageVerified: Boolean!
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
    me: User
    users: [User]
    user(username: String!): User
    setlists(username: String): [Setlist]
    setlist(_id: ID!): Setlist
    posts(username: String): [Posts]
    post(_id: ID!): Post

}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, ageVerified: Boolean!): Auth
}
`;

module.exports = typeDefs;