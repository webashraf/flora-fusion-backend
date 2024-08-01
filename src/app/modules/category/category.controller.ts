import { RequestHandler } from "express";
import { categoryService } from "./category.service";

const getAllCategory: RequestHandler = async (req, res) => {
  const result = await categoryService.getAllCategoryFromDB();
  res.status(200).json({
    success: true,
    message: "Category retrived successfully!",
    result: result,
  });
};

const updateCategory: RequestHandler = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  console.log("🚀 ~ constupdateCategory:RequestHandler= ~ data:", data);

  const result = await categoryService.updateCategoryIntoDB(id, data);
  res.status(200).json({
    success: true,
    message: "Category updated successfully!",
    result: result,
  });
};

export const categoryController = {
  getAllCategory,
  updateCategory,
};
