import Category from "./schema.js";

const CategoryService = {
  getCategories: async () => {
    try {
      const totalCategories = await Category.countDocuments();
      console.log("All categories : ", totalCategories);
      return await Category.find();
    } catch (error) {
      throw new Error(`Error retrieving categories: ${error.message}`);
    }
  },

  getCategory: async (categoryId) => {
    try {
      // return await  Category.findOne(categoryId)
      console.log("SERVICE_FIND_ONE : ", categoryId);
      return await Category.findById(categoryId);
    } catch (error) {
      throw new Error(`Error retrieving category: ${error.message}`);
    }
  },

  createCategory: async (categoryData) => {
    try {
      if (!categoryData) {
        console.log("❌ Error : categoryData cannot be null");
        throw new Error("categoryData cannot be null");
      }
      console.log("SERVICE_CREATE : ", categoryData);
      return await Category.create(categoryData);
    } catch (error) {
      throw new Error(`Error creating category: ${error.message}`);
    }
  },

  deleteCategory: async (categoryId) => {
    try {
      const categoryBeforeDeletion = await Category.findById(categoryId);
      const deleteResult = await Category.findByIdAndDelete(categoryId);
      if (!deleteResult) {
        throw new Error("No category was deleted");
      }
      return categoryBeforeDeletion;
    } catch (error) {
      throw new Error(
        `Error deleting category with id ${categoryId}: ${error.message}`
      );
    }
  },

  deleteCategories: async () => {
    try {
      const categoriesBeforeDeletion = await Category.find({});
      // console.log('Categories before deletion:', categoriesBeforeDeletion);
      const deleteResult = await Category.deleteMany();
      if (deleteResult.deletedCount === 0) {
        throw new Error("No categories were deleted");
      }
      return categoriesBeforeDeletion;
    } catch (error) {
      throw new Error(`Error deleting categories: ${error.message}`);
    }
  },

  updateCategory: async (updatedData) => {
    try {
      return await Category.findByIdAndUpdate(
        updatedData.categoryId,
        updatedData,
        { new: true }
      );
    } catch (error) {
      throw new Error(
        `Error updating category with id ${updatedData.categoryId}: ${error.message}`
      );
    }
  },
};

export default CategoryService;
