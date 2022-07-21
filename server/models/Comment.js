const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      minlength: 1
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateformat(timestamp)
    }
  },
  {
    toJSON: {
        getters: true
    }
  }
);

module.exports = commentSchema;