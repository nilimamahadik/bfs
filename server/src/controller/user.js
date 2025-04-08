
const User = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const admin = require('../models/admin');


exports.create_user_account = async (req, res) => {
  // console.log(req.body);
  try {
    const user = await User.findOne({ code: req.body.code, email: req.body.email }).exec();
    if (user) return res.status(400).json({
      message: 'User already registered, please log in'
    });

    const {
      // mandalname,
      code,
      name,
      phone,
      // address,
      email,
      password,
      status
    } = req.body;

    const check = await admin.findOne({ code: code }).exec();
    if (check) {
      const _user = new User({
        mandalname: check.mandalname,
        name,
        phone,
        address: check.address,
        email,
        password,
        status,
        code
      });

      _user.password = await bcrypt.hash(password, 10,)
      //console.log("USER :: ",_user)

      const savedUser = await _user.save();
      if (savedUser) {

        return res.status(201).json({
          message: "User created successfully",
          data: _user,
          status: "User"
        })
      }
    }
    // console.log(password)



  } catch (error) {
    return res.status(400).json({
      message: error
    });
  }
}

exports.authenticate_user = async (req, res) => {
  // console.log(req.body);
  try {
    const { email, password } = req.body;
    // Check if user exists
    // console.log("EMAIL :: ", user)
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(400).json({ error: "User not exists" });
    }
    if (user.status === "pending") {
      return res.status(400).json({ error: "Your Request is Pending, Admin not accepted yet" });
    }
    
    if (!user.isActive) {
      return res.status(400).json({
        error: "Your account is deactivated. Please contact the admin.",
      });
    }

    bcrypt.compare(password, user.password, function (error, isMatch) {
      // console.log("MATCH :: ", isMatch)
      if (isMatch) {
        const payload = {
          id: user.id,
          email: user.email
        }
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 31556926 }, (err, token) => {
          return res.status(200).json({
            message: "Sign In success",
            data: token,
            status: "User",
            id: user.mandalname,
            name: user.name,
            address: user.address
          })
        })
      }
      else {
        return res.status(400).json({ error: "Invalid email or password" });
      }

    })
  } catch (error) {
    //console.log(error);
    res.status(400).json({ error: "Semething Went Wrong" });
  }
};


exports.UserForgetPass = async (req, res) => {
  try {
    const { email, password } = req.body;
    const b_password = await bcrypt.hash(password, 10,)

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        message: "Email not found",
        status: "error"
      });
    }

    const forget = await User.findOneAndUpdate(
      { email: email },
      {
        $set: {
          password: b_password
        }
      },
      { new: true }
    )
    if (forget) {
      return res.status(200).json({
        message: "forget password successful",
        status: "success"
      })
    }

  } catch (error) {
    //console.log(error.message);
  }
}
