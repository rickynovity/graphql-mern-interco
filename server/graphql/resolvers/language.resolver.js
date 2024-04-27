import LanguageService from "../../services/language/language.service.js";

const languageResolver = {
  Query: {
    languages: async (_, __, ___) => await LanguageService.getLanguages(),
    language: async (_, { id }, ___) => await LanguageService.getLanguage(id),
  },

  Mutation: {
    createLanguage: async (_, { input }, ___) =>
      await LanguageService.createLanguage(input),
    deleteLanguage: async (_, { id }, ___) =>
      await LanguageService.deleteLanguage(id),
    deleteLanguages: async (_, __, ___) =>
      await LanguageService.deleteLanguages(),
    updateLanguage: async (_, { input }, ___) =>
      await LanguageService.updateLanguage(input),
  },
};

export default languageResolver;
