import { Schema } from "mongoose";

export interface TProducts {
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  ratings: number;
  category: Schema.Types.ObjectId;
  imageURL: string;
  stock: number;
  isAvailable: boolean;
}
