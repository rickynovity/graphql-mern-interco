import { categories } from "../../dummyData/data.js";

const categoryResolver = {
  Query: {
    categories: (_, __, ___) => categories,
    category: (_, { id }, ___) =>
      categories.find((category) => category._id === id),
  },

  // Mutation: {},
};

export default categoryResolver;
