import express from "express";
const app = express.Router();
import { createPostController } from "../controllers/post.contoller.js";
import authMiddleware from "../middlewares/auth.middlewares.js";
import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() })
app.post("/", authMiddleware, upload.single("image"), createPostController)

export default app
