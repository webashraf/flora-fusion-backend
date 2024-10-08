import { Router } from "express";
import { orderController } from "./order.controller";

const router = Router();


router.post("/create-payment-intent", orderController.createPayment)
router.post("/", orderController.createOrder);
// router.get("/", async (req, res, next) => {console.log("Order created!");})

export const orderRoute = router;
