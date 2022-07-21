const { Schema } = require('mongoose');

const setlistSchema = new Schema({
    
    date: 
    {
        type: String,
        required: true,
    },

    artist: 
    {
        type: String,
        required: true,
        default: 'goose',
    },
    venue: 
    {
        type: String,
        required: true,
    },
    city: 
    {
        type: String,
        required: true,
    },
    state:
    {
        type: String,
        required: true,
    },
    set: {
        type: String,
        required: true,
    }
});

module.exports = setlistSchema;