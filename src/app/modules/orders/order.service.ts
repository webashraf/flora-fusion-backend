import { AnyObject } from "mongoose";
import { stripe } from "../../../app";
import { Tree } from "../Products/products.model";
import { TOrderInfo } from "./order.interface";
import { Order } from "./order.model";
// const stripee = require("stripe")(config.payment_secret_key);

const createOrderIntoDB = async (payload: TOrderInfo) => {
  const session = await Order.startSession();
  session.startTransaction();

  try {
    const payloadProductIds = payload.products.map((product) => product._id);

    const treesProducts: any = await Tree.find({
      _id: { $in: payloadProductIds },
    }).session(session);

    for (const product of payload.products) {
      const treeProduct = treesProducts.find(
        (tProductItem: any) =>
          tProductItem._id.toString() === product._id.toString()
      );

      if (!treeProduct) {
        throw new Error(`${product._id} does not exist`);
      }

      if (treeProduct.stock < product.qty) {
        throw new Error(`${product.name} is insufficient stock.`);
      }

      treeProduct.stock -= product.qty;
      await treeProduct.save({ session });
    }

    const newOrder = await Order.create([payload], { session });

    await session.commitTransaction();
    session.endSession();

    return newOrder;
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error creating order:", err);
    throw err;
  }
};

const createPaymentIntoDB = async (payload: AnyObject) => {
  const finalAmount = Math.floor(payload?.amount * 100);
  const amount = Number(finalAmount);

  const res = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  console.log({ res });

  return res;
};

export const orderService = {
  createOrderIntoDB,
  createPaymentIntoDB,
};
