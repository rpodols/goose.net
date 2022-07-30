// RESERVED FOR FUTURE FUNCTIONALITY

// const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');
// const commentSchema = require('./Comment.js')


// const postSchema = new Schema({
//     body: {
//       type: String,
//       required: true
//     },
//     title: {
//       type: String,
//       required: true,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//       get: createdAtValue => dateFormat(createdAtValue),
//     },
//     username: {
//         type: String,
//         required: true
//     },
//     comments: [commentSchema]
// },
//   {
//     toJson: {
//       getters: true
//     }
//   } 
// );

// const Post = model('Post', postSchema)

// module.exports = Post;