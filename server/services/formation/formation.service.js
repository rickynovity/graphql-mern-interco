import Formation from "./schema.js";

const FormationService = {
  getFormations: async () => {
    try {
      const totalFormations = await Formation.countDocuments();
      console.log("All formations : ", totalFormations);
      return await Formation.find();
    } catch (error) {
      throw new Error(`Error retrieving formations: ${error.message}`);
    }
  },

  getFormationsByUser: async (userId) => {
    try {
      const totalFormationsByUser = await Formation.countDocuments({ userId });
      console.log(
        `All formations by user with id: ${userId}`,
        totalFormationsByUser
      );
      return await Formation.find({ userId }).sort({ createdAt: -1 });
    } catch (error) {
      throw new Error(`Error retrieving formations for user: ${error.message}`);
    }
  },

  getFormation: async (id) => {
    try {
      console.log("SERVICE_FIND_ONE : ", id);
      return await Formation.findById(id);
    } catch (error) {
      throw new Error(`Error retrieving formation: ${error.message}`);
    }
  },

  createFormation: async (formationData) => {
    try {
      if (!formationData) {
        console.log("❌ Error : formationData cannot be null");
        throw new Error("formationData cannot be null");
      }
      console.log("SERVICE_CREATE : ", formationData);
      return await Formation.create(formationData);
    } catch (error) {
      throw new Error(`Error creating Formation: ${error.message}`);
    }
  },

  deleteFormation: async (id) => {
    try {
      const FormationBeforeDeletion = await Formation.findById(id);
      const deleteResult = await Formation.findByIdAndDelete(id);
      if (!deleteResult) {
        throw new Error("No formation was deleted");
      }
      return FormationBeforeDeletion;
    } catch (error) {
      throw new Error(
        `Error deleting formation with id ${id}: ${error.message}`
      );
    }
  },

  deleteFormations: async () => {
    try {
      const FormationsBeforeDeletion = await Formation.find({});
      const deleteResult = await Formation.deleteMany();
      if (deleteResult.deletedCount === 0) {
        throw new Error("No formations were deleted");
      }
      return FormationsBeforeDeletion;
    } catch (error) {
      throw new Error(`Error deleting formations: ${error.message}`);
    }
  },

  updateFormation: async (updatedData) => {
    try {
      console.log("SERVICE_UPDATE : ", updatedData);
      return await Formation.findByIdAndUpdate(
        updatedData.formationId,
        updatedData,
        { new: true }
      );
    } catch (error) {
      throw new Error(
        `Error updating formation with id ${id}: ${error.message}`
      );
    }
  },
};

export default FormationService;
