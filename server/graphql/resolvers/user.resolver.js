import UserService from "../../services/user/user.service.js";

const userResolver = {
  Query: {
    users: async (_, __, ___) => await UserService.getUsers(),
    user: async (_, { id }, ___) => await UserService.getUser(id),
    authUser: async (_, __, context) => await UserService.authUser(context),
  },

  Mutation: {
    signUp: async (_, { input }, context) =>
      await UserService.signUp(input, context),
    login: async (_, { input }, context) =>
      await UserService.login(input, context),
    logout: async (_, __, context) => await UserService.logout(context),
  },
};

export default userResolver;
