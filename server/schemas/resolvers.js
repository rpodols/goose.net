const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
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
//     savePost: async (parent, { postData }, context) => {
//       if (context.user) {
//         const updatedUser = await User.findByIdAndUpdate(
//           { _id: context.user._id },
//           { $push: { savedPost: postData } },
//           { new: true }
//         );

//         return updatedUser;
//       }

//       throw new AuthenticationError('You need to be logged in!');
//     },
//     removePost: async (parent, { postId }, context) => {
//       if (context.user) {
//         const updatedUser = await User.findOneAndUpdate(
//           { _id: context.user._id },
//           { $pull: { savedPosts: { postId } } },
//           { new: true }
//         );

//         return updatedUser;
//       }

//       throw new AuthenticationError('You need to be logged in!');
//     },
//     addComment: async (parent, { commentData }, context) => {
//       if (context.user) {
//         const updatedUser = await User.findOneAndUpdate(
//           { _id: context.user._id },
//           { $pull: { savedComments: commentData } },
//           { new: true }
//         );
//         return updatedUser;
//       }
//       throw new AuthenticationError('You need to be logged in!');
//     },
//     removeComment: async (parent, { commentId }, context) => {
//       if (context.user) {
//         const updatedUser = await User.findOneAndUpdate(
//           { _id: context.user._id },
//           {$pull: {savedComments: { commentId } } },
//           { new: true }
//         );
//         return updatedUser;
//       }
//       throw new AuthenticationError('You need to be logged in!');
//     },
//     saveSetlist: async (parent, { setlistData }, context) => {
//       if (context.user) {
//         const updatedUser = await User.findByIdAndUpdate(
//           { _id: context.user._id },
//           { $push: { savedSetlist: setlistData } },
//           { new: true }
//         );

//         return updatedUser;
//       }

//       throw new AuthenticationError('You need to be logged in!');
//     },
//     removeSetlist: async (parent, { setlistId }, context) => {
//       if (context.user) {
//         const updatedUser = await User.findOneAndUpdate(
//           { _id: context.user._id },
//           { $pull: { savedSetlist: { setlistId } } },
//           { new: true }
//         );

//         return updatedUser;
//       }

//       throw new AuthenticationError('You need to be logged in!');
//     },
    
   },
};

module.exports = resolvers;