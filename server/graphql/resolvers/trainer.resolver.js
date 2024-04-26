import { trainers } from "../../dummyData/data.js";

const trainerResolver = {
  Query: {
    trainers: (_, __, ___) => trainers,
    trainer: (_, { id }, ___) => trainers.find((trainer) => trainer._id === id),
  },

  // Mutation: {},
};

export default trainerResolver;
