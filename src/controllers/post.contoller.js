
import generateCaption from "../service/ai.service.js";
export async function createPostController(req, res) {
  const file = req.file;


  const base64Image = Buffer.from(file.buffer).toString("base64");
  const caption = await generateCaption(base64Image)

  console.log(caption)
  res.json({
    caption
  })




}
export default {
  createPostController,
};