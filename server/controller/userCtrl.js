const mongoose = require("mongoose");
const UserModel1 = require("../model/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");


//  registrain part and validaitio 

const userRegister = async (req, res) => {
  const { name, phone, email, password, confirmPassword } = req.body;

  const user = await UserModel1.findOne({ email });

  if (user)
    return res
      .status(400)
      .json({ status: "failed", message: "email already existing" });

  if (password.length < 8)
    return res.status(400).json({ message: "password is too short" });
  if (password !== confirmPassword)
    return res.status(400).json({ messge: "password does not match" });
  if (phone.length !== 10)
    return res.status(400).json({ message: "phone no is invalid" });
  const result = await UserModel1.create({
    name,
    phone,
    email,
    password,
    confirmPassword,
  });
  try {
    const token = jwt.sign({ name: result.name,},"test",{ expiresIn: "2h" });

    res.status(200).json({ result, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
  const doc = await result.save();
  // if (result === doc)
  //   return res.status(400).json({ message: "user register sucessfully" });
};

// signning part

const signin = async (req, res) => {
  const { name, password } = req.body;
  try {
      
      
      const existingUser = await UserModel1.findOne({ name });
     
      if(!existingUser) return res.status(404).json({ message: "User doesn't exist!" });
      
      const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);  
      if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid Credentials!" });
      const token = jwt.sign({ name: existingUser.name}, 'test', {expiresIn: "2h" });
      
      res.status(200).json({ result: existingUser, token}); 
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
  }
};
module.exports = {userRegister,signin}