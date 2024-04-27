import CategoryService from "../../services/category/category.service.js";
import FormationService from "../../services/formation/formation.service.js";
import LanguageService from "../../services/language/language.service.js";
import StatusService from "../../services/status/status.service.js";
import TrainerService from "../../services/trainer/trainer.service.js";

const formationResolver = {
  Query: {
    formations: async (_, __, ___) => await FormationService.getFormations(),
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
      CategoryService.getCategory(parent.categoryId),
    status: async (parent, __, ___) => StatusService.getStatus(parent.statusId),
    language: async (parent, __, ___) =>
      LanguageService.getLanguage(parent.languageId),
    trainer: async (parent, __, ___) =>
      TrainerService.getTrainer(parent.trainerId),
  },
};

export default formationResolver;
