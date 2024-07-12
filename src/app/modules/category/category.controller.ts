import { RequestHandler } from "express";
import { categoryService } from "./category.service";

const getAllCategory: RequestHandler = async (req, res) => {
  const result = await categoryService.getAllCategoryFromDB();
  res.send(result);
};

export const categoryController = {
  getAllCategory,
};
