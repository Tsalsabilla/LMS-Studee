const express = require("express");
const { AdminModel } = require("../models/admin.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const admins = await AdminModel.find();
    res.send({ message: "All admins data", admins });
  } catch (error) {
    res.status(400).send({ message: "Something went wrong" });
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  try {
    let user = await AdminModel.find({ email });
    if (user.length > 0) {
      return res.send({ msg: "User already registered" });
    }
    bcrypt.hash(
      password,
      +process.env.Salt_rounds,
      async (err, secure_password) => {
        if (err) {
          console.log(err);
        } else {
          const admin = new AdminModel({
            name,
            email,
            password: secure_password,
          });
          await admin.save();
          let newAdmin = await AdminModel.find({ email });
          res
            .status(201)
            .send({ msg: "Admin Registered Successfully", admin: newAdmin[0] });
        }
      }
    );
  } catch (err) {
    res.status(404).send({ msg: "Admin Registration failed" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await AdminModel.find({ email });
    if (admin.length > 0) {
      if (admin[0].access == false) {
        return res.send({ message: "Access Denied" });
      }
      bcrypt.compare(password, admin[0].password, (err, results) => {
        if (results) {
          let token = jwt.sign(
            { email, name: admin[0].name },
            process.env.secret_key,
            { expiresIn: "7d" }
          );
          res.send({
            message: "Login Successful",
            user: admin[0],
            token,
          });
        } else {
          res.status(201).send({ message: "Wrong credentials" });
        }
      });
    } else {
      res.send({ message: "Wrong credentials" });
    }
  } catch (error) {
    res.status(404).send({ message: "Error" });
  }
});

router.patch("/:adminId", async (req, res) => {
  const { adminId } = req.params;
  const payload = req.body;
  try {
    const admin = await AdminModel.findByIdAndUpdate({ _id: adminId }, payload);
    res.status(200).send({ msg: "Updated Admin" });
  } catch (err) {
    res.status(404).send({ msg: "Error" });
  }
});

router.delete("/:adminId", async (req, res) => {
  const { adminId } = req.params;
  try {
    const admin = await AdminModel.findByIdAndDelete({ _id: adminId });
    res.status(200).send({ msg: "Deleted Admin" });
  } catch (error) {
    res.status(404).send({ msg: "Error" });
  }
});

module.exports = router;
