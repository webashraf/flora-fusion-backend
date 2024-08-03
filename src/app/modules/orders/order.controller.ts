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

  // console.log("amounts", price);
  const paymentIntent = await orderService.createPaymentIntoDB(price);

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

export const orderController = {
  createOrder,
  createPayment,
};
