import mongoose from "mongoose";
import { TProducts } from "./products.interface";

const productSchema = new mongoose.Schema<TProducts>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: [String], required: true },
  imageURL: { type: String, required: true },
  stock: { type: Number, required: true },
  isAvailable: { type: Boolean, required: true },
});

export const Tree = mongoose.model<TProducts>("Tree", productSchema);
