import { users } from "../../dummyData/data.js";

const userResolver = {
  Query: {
    users: (_, __, ___) => users,
    user: (_, { id }, ___) => users.find((user) => user._id === id),
  },

  // Mutation: {},
};

export default userResolver;
