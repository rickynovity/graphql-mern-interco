import Status from "./schema.js";

const StatusService = {
  getAllStatus: async () => {
    try {
      const totalAllStatus = await Status.countDocuments();
      console.log("All status : ", totalAllStatus);
      return await Status.find();
    } catch (error) {
      throw new Error(`Error retrieving all status: ${error.message}`);
    }
  },

  getStatus: async (id) => {
    try {
      console.log("SERVICE_FIND_ONE : ", id);
      return await Status.findById(id);
    } catch (error) {
      throw new Error(`Error retrieving Status: ${error.message}`);
    }
  },

  createStatus: async (statusData) => {
    try {
      if (!statusData) {
        console.log("❌ Error : statusData cannot be null");
        throw new Error("statusData cannot be null");
      }
      console.log("SERVICE_CREATE : ", statusData);
      return await Status.create(statusData);
    } catch (error) {
      throw new Error(`Error creating Status: ${error.message}`);
    }
  },

  deleteStatus: async (id) => {
    try {
      const StatusBeforeDeletion = await Status.findById(id);
      const deleteResult = await Status.findByIdAndDelete(id);
      if (!deleteResult) {
        throw new Error("No status was deleted");
      }
      return StatusBeforeDeletion;
    } catch (error) {
      throw new Error(`Error deleting Status with id ${id}: ${error.message}`);
    }
  },

  deleteAllStatus: async () => {
    try {
      const AllStatusBeforeDeletion = await Status.find({});
      const deleteResult = await Status.deleteMany();
      if (deleteResult.deletedCount === 0) {
        throw new Error("No AllStatus were deleted");
      }
      return AllStatusBeforeDeletion;
    } catch (error) {
      throw new Error(`Error deleting all status: ${error.message}`);
    }
  },

  updateStatus: async (updatedData) => {
    try {
      return await Status.findByIdAndUpdate(updatedData.statusId, updatedData, {
        new: true,
      });
    } catch (error) {
      throw new Error(
        `Error updating status with id ${updatedData.statusId}: ${error.message}`
      );
    }
  },
};

export default StatusService;
