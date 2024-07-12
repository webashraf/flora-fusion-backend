import { Schema } from "mongoose";

export interface TProducts {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Schema.Types.ObjectId;
  imageURL: string;
  stock: number;
  isAvailable: boolean;
}
