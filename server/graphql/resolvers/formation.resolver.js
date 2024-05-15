import CategoryService from "../../services/category/category.service.js";
import FormationService from "../../services/formation/formation.service.js";
import LanguageService from "../../services/language/language.service.js";
import StatusService from "../../services/status/status.service.js";
import TagNameService from "../../services/tagName/tagName.service.js";
import TrainerService from "../../services/trainer/trainer.service.js";
import UserService from "../../services/user/user.service.js";

const formationResolver = {
  Query: {
    formations: async (_, __, ___) => await FormationService.getFormations(),
    formationsByUser: async (_, { id }, ___) =>
      await FormationService.getFormationsByUser(id),
    formation: async (_, { id }, ___) =>
      await FormationService.getFormation(id),
  },

  Mutation: {
    createFormation: async (_, { input }, ___) =>
      await FormationService.createFormation(input),
    deleteFormation: async (_, { id }, ___) =>
      await FormationService.deleteFormation(id),
    deleteFormations: async (_, __, ___) =>
      await FormationService.deleteFormations(),
    updateFormation: async (_, { input }, ___) =>
      await FormationService.updateFormation(input),
  },

  Formation: {
    category: async (parent, __, ___) =>
      await CategoryService.getCategory(parent.categoryId),
    status: async (parent, __, ___) =>
      await StatusService.getStatus(parent.statusId),
    language: async (parent, __, ___) =>
      await LanguageService.getLanguage(parent.languageId),
    trainer: async (parent, __, ___) =>
      await TrainerService.getTrainer(parent.trainerId),
    tagNames: async (parent, __, ____) =>
      await TagNameService.getTagNamesByFormation(parent.tagNameIds),
    user: async (parent, __, ___) => await UserService.getUser(parent.userId),
  },
};

export default formationResolver;
