import cors from "cors";
import express from "express";
import config from "./app/config";
import router from "./app/routes";
export const stripe = require("stripe")(config.payment_secret_key);

const app = express();
app.use(express.json());
const corsOptions = {
  credentials: true,
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://flora-fusion-backend.vercel.app/",
    "https://flora-fussing.vercel.app/",
  ],
};

app.use(cors(corsOptions));

app.use("/api/v1/", router);

app.get("/", (req, res) => {
  res.send("Hello World! This is flora fusion backend");
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: "Not Found",
  });
});
export default app;
