const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const postSchema = new Schema({
    body: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    createAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
        type: String,
        required: true
    },
    comment: [commentSchema]
},
  {
    toJson: {
      getters: true
    }
  } 
);

module.exports = postSchema;