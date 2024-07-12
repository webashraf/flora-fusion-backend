import mongoose from "mongoose";
import { TTreeProductsCategory } from "./category.interface";

const treeProductsByCategorySchema = new mongoose.Schema<TTreeProductsCategory>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageURL: { type: String, required: true },
  }
);

export const Category = mongoose.model<TTreeProductsCategory>(
  "Category",
  treeProductsByCategorySchema
);
