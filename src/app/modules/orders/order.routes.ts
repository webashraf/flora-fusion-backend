import { Router } from "express";
import { orderController } from "./order.controller";

const router = Router();


router.post("/", orderController.createOrder);
router.post("/create-payment-intent", orderController.createPayment)
router.get("/", async (req, res, next) => {console.log("Order created!");})

export const orderRoute = router;
