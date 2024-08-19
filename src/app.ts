import cors from "cors";
import express from "express";
import config from "./app/config";
import router from "./app/routes";
export const stripe = require("stripe")(config.payment_secret_key);

const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"] }));

app.use("/api/v1/", router);

app.get("/api/v1/", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: "Not Found",
  });
});
export default app;
