import { Schema } from "mongoose";

export interface TProducts {
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  ratings: number;
  category: Schema.Types.ObjectId;
  imageURL: string;
  stock: number;
  isAvailable: boolean;
}

