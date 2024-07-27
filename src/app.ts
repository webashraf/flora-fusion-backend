import cors from "cors";
import express from "express";
import config from "./app/config";
import router from "./app/routes";
export const stripe = require("stripe")(config.payment_secret_key);

const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"] }));

app.use("/api/v1/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// * Payment Gateway Test
app.post("/create-payment-intent", async (req, res) => {
  const { price } = req.body;
  const centAmount = String(price * 100);
  const amount = parseInt(centAmount);
  console.log("🚀 ~ app.post ~ amount:", amount);

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: "Not Found",
  });
});
export default app;
