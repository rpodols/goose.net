const { Schema, model } = require('mongoose');

const setlistSchema = new Schema({
    
    date: 
    {
        type: Date,
        required: true,
    },
    artist: 
    {
        type: String,
        required: true,
    },
    venue: 
    {
        type: String,
        required: true,
    },
    location: 
    {
        type: String,
        required: true,
    },
    set: {
        type: String,
        required: true,
    },
    songList:
    {
        type: String,
        required: true,
    },
});

const Setlist = model('Setlist', setlistSchema);

module.exports = Setlist;