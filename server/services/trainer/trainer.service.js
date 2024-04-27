import Trainer from "./schema.js";

const TrainerService = {
  getTrainers: async () => {
    try {
      const totalTrainers = await Trainer.countDocuments();
      console.log("All trainers : ", totalTrainers);
      return await Trainer.find();
    } catch (error) {
      throw new Error(`Error retrieving Trainers: ${error.message}`);
    }
  },

  getTrainer: async (id) => {
    try {
      console.log("SERVICE_FIND_ONE : ", id);
      return await Trainer.findById(id);
    } catch (error) {
      throw new Error(`Error retrieving trainer: ${error.message}`);
    }
  },

  createTrainer: async (trainerData) => {
    try {
      if (!trainerData) {
        console.log("❌ Error : trainerData cannot be null");
        throw new Error("trainerData cannot be null");
      }
      console.log("SERVICE_CREATE : ", trainerData);
      return await Trainer.create(trainerData);
    } catch (error) {
      throw new Error(`Error creating trainer: ${error.message}`);
    }
  },

  deleteTrainer: async (id) => {
    try {
      const TrainerBeforeDeletion = await Trainer.findById(id);
      const deleteResult = await Trainer.findByIdAndDelete(id);
      if (!deleteResult) {
        throw new Error("No trainer was deleted");
      }
      return TrainerBeforeDeletion;
    } catch (error) {
      throw new Error(`Error deleting trainer with id ${id}: ${error.message}`);
    }
  },

  deleteTrainers: async () => {
    try {
      const TrainersBeforeDeletion = await Trainer.find({});
      const deleteResult = await Trainer.deleteMany();
      if (deleteResult.deletedCount === 0) {
        throw new Error("No trainers were deleted");
      }
      return TrainersBeforeDeletion;
    } catch (error) {
      throw new Error(`Error deleting trainers: ${error.message}`);
    }
  },

  updateTrainer: async (updatedData) => {
    try {
      return await Trainer.findByIdAndUpdate(
        updatedData.trainerId,
        updatedData,
        { new: true }
      );
    } catch (error) {
      throw new Error(
        `Error updating trainer with id ${updatedData.trainerId}: ${error.message}`
      );
    }
  },
};

export default TrainerService;
