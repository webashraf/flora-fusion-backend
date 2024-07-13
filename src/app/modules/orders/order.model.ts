import mongoose from "mongoose";
import { TOrderInfo } from "./order.interface";

const orderedProducts = {
  _id: { type: String, required: true },
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
};

const OrderSchema = new mongoose.Schema<TOrderInfo>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  optionalWhatsAppNumber: { type: String },
  address: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  division: { type: String, required: true },
  products: [orderedProducts],
  totalAmount: { type: Number, required: true },
});

export const Order = mongoose.model<TOrderInfo>("Order", OrderSchema);
