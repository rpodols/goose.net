const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const commentSchema = require('./Comment.js')


const postSchema = new Schema({
    body: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtValue => dateFormat(createdAtValue),
    },
    username: {
        type: String,
        required: true
    },
    comments: [commentSchema]
},
  {
    toJson: {
      getters: true
    }
  } 
);

module.exports = postSchema;