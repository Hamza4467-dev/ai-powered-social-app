import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
})

const postModel = mongoose.model("post", postSchema)

export default postModel