import TrainerService from "../../services/trainer/trainer.service.js";

const trainerResolver = {
  Query: {
    trainers: async (_, __, ___) => await TrainerService.getTrainers(),
    trainer: async (_, { id }, ___) => await TrainerService.getTrainer(id),
  },

  Mutation: {
    createTrainer: async (_, { input }, ___) =>
      await TrainerService.createTrainer(input),
    deleteTrainer: async (_, { id }, ___) =>
      await TrainerService.deleteTrainer(id),
    deleteTrainers: async (_, __, ___) => await TrainerService.deleteTrainers(),
    updateTrainer: async (_, { input }, ___) =>
      await TrainerService.updateTrainer(input),
  },
};

export default trainerResolver;
