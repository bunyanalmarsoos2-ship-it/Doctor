import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import testRoutes from "./routes/testRoutes.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

// config dotenv
dotenv.config();

// database
connectDB();
// Rest Object
const app = express();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("<h1>NodeDoc Server is running</h1>");
});

app.use("/api/v1/test", testRoutes);
app.use("/api/v1/user", userRoutes);
// port
const PORT = process.env.PORT || 8000;

// run server
app.listen(PORT, () => {
  console.log(
    ` Node server runnig in ${process.env.NODE_ENV} mode on port: ${PORT} `
      .bgBlue.white,
  );
});
