import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});