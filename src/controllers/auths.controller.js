import userModel from "../models/user.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
export async function registerController(req, res) {
  const { username, password } = req.body
  const existingUser = await userModel.findOne({ username })
  if (existingUser) {
    return res.status(409).json({
      message: "user already exists"
    })
  }
  const user = await userModel.create({
    username,
    password: bcrypt.hashSync(password, 10)
  })
  const token = jwt.sign({
    username,
  }, process.env.JWT_SECRET)
  res.cookie("token", token)
  res.status(201).json({
    message: "user created successfully",
    user,
  })
}

export async function loginController(req, res) {
  const { username, password } = req.body
  const user = await userModel.findOne({ username })
  if (!user) {
    return res.status(401).json({
      message: "user not found"
    })
  }
  const isPasswordValid = bcrypt.compareSync(password, user.password)
  if (!isPasswordValid) {
    return res.status(401).json({
      message: "invalid password"
    })
  }
  const token = jwt.sign({
    username,
  }, process.env.JWT_SECRET)

  res.cookie("token", token)
  res.status(200).json({
    message: "logged in successfully",
    token,
    user
  })
}