import mongoose, { Schema } from "mongoose";
import { TProducts } from "./products.interface";

const productSchema = new mongoose.Schema<TProducts>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  imageURL: { type: String, required: true },
  stock: { type: Number, required: true },
  isAvailable: { type: Boolean, required: true },
});

export const Tree = mongoose.model<TProducts>("Tree", productSchema);
