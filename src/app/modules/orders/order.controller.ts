import { RequestHandler } from "express";
import { orderService } from "./order.service";

const createOrder: RequestHandler = async (req, res) => {
  const result = await orderService.createOrderIntoDB(req.body);

  res.status(200).json({
    success: true,
    message: "Order succesfully created!",
    result: result,
  });
};

const createPayment: RequestHandler = async (req, res) => {
  const { payload } = req.body;
  console.log("🚀 ~ constcreatePayment:RequestHandler= ~ price:", payload);

  // console.log("amountssssssssssss", price);
  const paymentIntent = await orderService.createPaymentIntoDB(payload);

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

export const orderController = {
  createOrder,
  createPayment,
};
