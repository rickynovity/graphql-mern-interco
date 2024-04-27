import CategoryService from "../../services/category/category.service.js";

const categoryResolver = {
  Query: {
    categories: async (_, __, ___) => await CategoryService.getCategories(),
    category: async (_, { categoryId }, ___) =>
      await CategoryService.getCategory(categoryId),
  },

  Mutation: {
    createCategory: async (_, { input }, ___) =>
      await CategoryService.createCategory(input),
    deleteCategory: async (_, { categoryId }, ___) =>
      await CategoryService.deleteCategory(categoryId),
    deleteCategories: async (_, __, ___) =>
      await CategoryService.deleteCategories(),
    updateCategory: async (_, { input }, ___) =>
      await CategoryService.updateCategory(input),
  },
};

export default categoryResolver;
