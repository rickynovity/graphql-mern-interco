import TagNameService from "../../services/tagName/tagName.service.js";

const tagNameResolver = {
  Query: {
    tagNames: async (_, __, ___) => await TagNameService.getTagNames(),
    tagName: async (_, { id }, ___) => await TagNameService.getTagName(id),
  },

  Mutation: {
    createTagName: async (_, { input }, ___) =>
      await TagNameService.createTagName(input),
    deleteTagName: async (_, { id }, ___) =>
      await TagNameService.deleteTagName(id),
    deleteTagNames: async (_, __, ___) => await TagNameService.deleteTagNames(),
    updateTagName: async (_, { input }, ___) =>
      await TagNameService.updateTagName(input),
  },
};

export default tagNameResolver;
