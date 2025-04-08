const jwt = require("jsonwebtoken");
const multer = require("multer");
// const shortid = require("shortid");
const path = require("path");


exports.requireSignin = (req, res, next) => {
  // console.log(req.headers.authorization);
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    console.log(req.user = user);
  } else {
    return res.status(400).json({ message: "Authorization required" });
  }
  next();
};

