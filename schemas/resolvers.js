const { User} = require('../server/models');

const resolvers = {
  Query: {
    me: async () => {
      return User.find().sort({ createdAt: -1 });
    }
  }
};
  
  module.exports = resolvers;