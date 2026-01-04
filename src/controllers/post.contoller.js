import postModel from "../models/post.model.js"

export async function createPostController(req, res) {
  const file = req.file;







  res.json({ message: "Post created successfully" });
}