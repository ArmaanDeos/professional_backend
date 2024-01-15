import dotenv from "dotenv";
import connectDB from "./db/connection.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection FAILED !", error);
  });
