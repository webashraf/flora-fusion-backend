import { Category } from "./category.model";

const getAllCategoryFromDB = async () => {
  const result = await Category.find({});

  return result;
};

export const categoryService = {
  getAllCategoryFromDB,
};
