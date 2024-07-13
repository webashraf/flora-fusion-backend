import { Schema } from "mongoose";

export interface TProducts {
  _id?: string;
  id: string;
  name: string;
  description: string;
  price: number;
  category: Schema.Types.ObjectId;
  imageURL: string;
  stock: number;
  isAvailable: boolean;
}
