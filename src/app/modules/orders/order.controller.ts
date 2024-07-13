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

export const orderController = {
  createOrder,
};
