import { RequestHandler } from "express";
import { productsService } from "./products.service";

const getAllTrees: RequestHandler = async (req, res) => {
  const result = await productsService.getAllProductsFromDB(req.query);
  res.status(200).json({
    success: true,
    message: "Data successfully retrived!",
    result: result,
  });
};

const getSingleTree: RequestHandler = async (req, res) => {
  const { treeId } = req.params;

  const result = await productsService.getSingleTreeFromDB(treeId);
  res.status(200).json({
    success: true,
    message: "Data successfully retrived!",
    result: result,
  });
};

const updateTree: RequestHandler = async (req, res) => {
  console.log(req.params.id);
  const result = await productsService.updateTreeIntoDB(req.params.treeId);
  res.status(200).json({
    success: true,
    message: "Tree updated successfully!",
    result: result,
  });
};

const createProduct: RequestHandler = async (req, res) => {
  const result = await productsService.createProductIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: "Product created successfully!",
    result: result,
  });
};

const deleteTree: RequestHandler = async (req, res) => {
  const result = await productsService.deleteTreeFromDB(req.params.treeId);
  res.status(200).json({
    success: true,
    message: "Product Deleted successfully!",
    result: result,
  });
};

export const productsController = {
  getAllTrees,
  updateTree,
  getSingleTree,
  createProduct,
  deleteTree,
};
