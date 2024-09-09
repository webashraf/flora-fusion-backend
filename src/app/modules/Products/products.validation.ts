import { z } from "zod";
import { Types } from "mongoose";

const ProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number().min(0, "Price must be a non-negative number"),
  description: z.string().min(1, "Description is required"),
  shortDescription: z.string().min(1, "Short description is required"),
  ratings: z.number().min(0).max(5, "Ratings must be between 0 and 5"),
  category: z.string().refine((value) => Types.ObjectId.isValid(value), {
    message: "Invalid category ID",
  }),
  imageURL: z.string().url("Invalid URL"),
  stock: z.number().min(0, "Stock must be a non-negative number"),
  isAvailable: z.boolean(),
});

export type TProducts = z.infer<typeof ProductSchema>;

export default ProductSchema;
