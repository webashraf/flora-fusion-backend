import { TTreeProductsCategory } from "./category.interface";
import { Category } from "./category.model";

const getAllCategoryFromDB = async () => {
  const result = await Category.find({});

  return result;
};

const updateCategoryIntoDB = async (
  _id: string,
  payload: TTreeProductsCategory
) => {
  // console.log("🚀 ~ _id:", _id);
  // console.log("🚀 ~ payload:", payload);
  return Category.findByIdAndUpdate({ _id }, payload, { new: true });
};

export const categoryService = {
  getAllCategoryFromDB,
  updateCategoryIntoDB,
};
