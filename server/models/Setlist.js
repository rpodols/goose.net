const { Schema, model } = require('mongoose');

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
    },
    setTwoSongList:
    {
        type: String,
    },
    encoreSongList:
    {
        type: String,
    },

});

const Setlist = model('Setlist', setlistSchema);

module.exports = Setlist;