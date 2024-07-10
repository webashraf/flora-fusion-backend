import { RequestHandler } from "express";
import { Tree } from "./products.model";

const getAllTrees: RequestHandler = async (req, res) => {
  console.log("get all trees");
  const result = await Tree.find({});
  res.send(result);
};

export const productsController = {
  getAllTrees,
};
