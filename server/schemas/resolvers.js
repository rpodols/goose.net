const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models')

Mutation: {
  addUser: async (parent, args) => {
    const user = await User.create(args);
    const token = signToken(user)
  }
}

module.exports = resolvers;