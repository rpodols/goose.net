const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
  {
    commentBody: {
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
        get: createdAtValue => dateFormat(createdAtValue)
    }
  },
  {
    toJSON: {
        getters: true
    }
  }
);

module.exports = commentSchema;