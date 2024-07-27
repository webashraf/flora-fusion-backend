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
  const { price } = req.body;
  const centAmount = String(price * 100);
  const amount = parseInt(centAmount);
  console.log("🚀 ~ app.post ~ amount:", amount);

  const paymentIntent = await orderService.createPaymentIntoDB(amount);

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

export const orderController = {
  createOrder,
  createPayment,
};
