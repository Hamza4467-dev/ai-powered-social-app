import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";
import connectToDB from "./src/db/db.js";
connectToDB();
app.listen(3000, () => {
  console.log("server is running port 3000");
});