const { AuthenticationError } = require('apollo-server-express');
const { User, Setlist } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
        return User.find()
            .select('-__v -password')
    },
  
  setlists: async () => {
    return Setlist.find()
  },
  setlist: async (parent, { _id }) => {
    return Setlist.findOne({ _id });
  }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
      
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addSetlist: async (parent, args) => {
      const setlist = await Setlist.create(args);
        return setlist;
    

      //throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { setlistId, commentBody }, context) => {
      if (context.user) {
        const updatedSetlist = await Setlist.findOneAndUpdate(
          { _id: setlistId },
          { $push: { comments: { commentBody, username: context.user.username } } },
          { new: true }
        );
        return updatedSetlist;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    deleteSetlist: async (parent, { setlistId }) => {
      const setlist = await Setlist.findByIdAndRemove( 
        { _id: setlistId },
        { new: true } 
        );
        return setlist;
    },
    updateSetlist: async (parent, args) => {
      const setlist = await Setlist.findByIdAndUpdate( 
        { _id: args.setlistId },
        { $set: { 
          artist: args.artist,
          venue: args.venue,
          location: args.location,
          setOneSongList: args.setOneSongList,
          setTwoSongList: args.setTwoSongList,
          encoreSongList: args.encoreSongList,
          date: args.date
        }},
        { new: true } 
        );
        return setlist;
    },
   },
};

module.exports = resolvers;