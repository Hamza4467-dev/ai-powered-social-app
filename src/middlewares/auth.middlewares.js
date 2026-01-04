import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js"
async function authMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized"
    })
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    const { username } = decodedToken
    const user = await userModel.findOne({
      username
    })
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      })
    }
    req.user = user
    next()

  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized"
    })
  }
}

export default authMiddleware
