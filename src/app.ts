import cors from "cors";
import express from "express";
import router from "./app/routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use((req, res) => {
  res.status(500).json({
    success: false,
    statusCode: 404,
    message: "Not Found",
  });
});
export default app;
