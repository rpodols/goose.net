const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

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
    setOneSongList:
    {
        type: String,
        required: true,
    },
    setTwoSongList:
    {
        type: String,
        required: true,
    },
    encoreSongList:
    {
        type: String,
        required: true,
    },
    comments: [commentSchema]

});

const Setlist = model('Setlist', setlistSchema);

module.exports = Setlist;