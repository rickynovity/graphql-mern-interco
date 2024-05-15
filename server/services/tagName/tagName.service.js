import TagName from "./schema.js";

const TagNameService = {
  getTagNames: async () => {
    try {
      const totalTagNames = await TagName.countDocuments();
      console.log("All tagNames : ", totalTagNames);
      return await TagName.find();
    } catch (error) {
      throw new Error(`Error retrieving tagNames: ${error.message}`);
    }
  },

  getTagNamesByFormation: async (formationTagNameIds) => {
    try {
      let filter = {};
      if (formationTagNameIds && formationTagNameIds.length > 0) {
        filter = { _id: { $in: formationTagNameIds } };
      }

      const totalTagNames = await TagName.countDocuments(filter);
      console.log("Total tagNames:", totalTagNames);

      const tagNames = await TagName.find(filter);
      console.log("Filtered tagNames:", tagNames);

      return tagNames;
    } catch (error) {
      throw new Error(`Error retrieving tagNames: ${error.message}`);
    }
  },

  getTagName: async (id) => {
    try {
      console.log("SERVICE_FIND_ONE : ", id);
      return await TagName.findById(id);
    } catch (error) {
      throw new Error(`Error retrieving TagName: ${error.message}`);
    }
  },

  createTagName: async (tagNameData) => {
    try {
      if (!tagNameData) {
        console.log("❌ Error : tagNameData cannot be null");
        throw new Error("tagNameData cannot be null");
      }
      console.log("SERVICE_CREATE : ", tagNameData);
      return await TagName.create(tagNameData);
    } catch (error) {
      throw new Error(`Error creating tagName: ${error.message}`);
    }
  },

  deleteTagName: async (id) => {
    try {
      const TagNameBeforeDeletion = await TagName.findById(id);
      const deleteResult = await TagName.findByIdAndDelete(id);
      if (!deleteResult) {
        throw new Error("No tagName was deleted");
      }
      return TagNameBeforeDeletion;
    } catch (error) {
      throw new Error(`Error deleting tagName with id ${id}: ${error.message}`);
    }
  },

  deleteTagNames: async () => {
    try {
      const TagNamesBeforeDeletion = await TagName.find({});
      const deleteResult = await TagName.deleteMany();
      if (deleteResult.deletedCount === 0) {
        throw new Error("No tagNames were deleted");
      }
      return TagNamesBeforeDeletion;
    } catch (error) {
      throw new Error(`Error deleting tagNames: ${error.message}`);
    }
  },

  updateTagName: async (updatedData) => {
    try {
      return await TagName.findByIdAndUpdate(
        updatedData.tagNameId,
        updatedData,
        { new: true }
      );
    } catch (error) {
      throw new Error(
        `Error updating tagName with id ${updatedData.tagNameId}: ${error.message}`
      );
    }
  },
};

export default TagNameService;
