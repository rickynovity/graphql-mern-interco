import { formations } from "../../dummyData/data.js";

const formationResolver = {
  Query: {
    formations: (_, __, ___) => formations,
    formation: (_, { id }, ___) =>
      formations.find((formation) => formation._id === id),
  },

  // Mutation: {},
};

export default formationResolver;
