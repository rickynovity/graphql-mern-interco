import { languages } from "../../dummyData/data.js";

const languageResolver = {
  Query: {
    languages: (_, __, ___) => languages,
    language: (_, { id }, ___) =>
      languages.find((language) => language._id === id),
  },

  // Mutation: {},
};

export default languageResolver;
