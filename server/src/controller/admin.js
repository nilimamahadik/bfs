
const Admin = require('../models/admin')
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const admin = require('../models/admin');
const User = require('../models/user')

exports.update = async (req, res) => {
  // console.log(req.params);
  try {
    const update = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          status: "success",
          isActive: true
        }
      },
      { new: true }
    )
    if (update) {
      return res.status(201).json({
        message: "request find successfully",
        data: update

      })

    }
  } catch (error) {
    return res.status(400).json({
      message: error
    });
  }
}

exports.user_management = async (req, res) => {
  // console.log(req);
  try {
    const group = req.body.id
    // console.log(group);
    const pendinguser = await User.find({ mandalname: group })


    // console.log(pendinguser.length);

    const activeUsers = await User.find({
      mandalname: group,
      status: "success",
      isActive: true,
    });

    return res.status(201).json({
      message: "request find successfully",
      data: pendinguser,
      count: pendinguser.length,
      activecount: activeUsers.length
    })


  } catch (error) {
    return res.status(400).json({
      message: error
    });
  }
}

exports.create_admin_account = async (req, res) => {
  // console.log(req.body);
  try {
    const existingEmailAdmin = await Admin.findOne({ email: req.body.email }).exec();
    if (existingEmailAdmin) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Check if the code exists
    const existingCodeAdmin = await Admin.findOne({ code: req.body.code }).exec();
    if (existingCodeAdmin) {
      return res.status(400).json({ message: 'Code already exists' });
    }
    const {
      mandalname,
      name,
      registration,
      phone,
      address,
      pincode,
      email,
      password,
      district,
      active,
      code
    } = req.body;

    // console.log(password)

    const _admin = new Admin({
      mandalname,
      name,
      registration,
      phone,
      address,
      pincode,
      email,
      password,
      district,
      active,
      code
    });
    // console.log(password);

    _admin.password = await bcrypt.hash(password, 10,)

    // console.log("USER :: ",_user)

    const savedAdmin = await _admin.save();
    if (savedAdmin) {

      return res.status(201).json({
        message: "User created successfully",
        data: _admin,
        status: "Admin"
      })
    }
    // console.log(res);

  } catch (error) {
    console.log(error.message);

    return res.status(400).json({
      message: error
    });
  }
}


exports.authenticate_admin = async (req, res) => {
  // console.log(req.body)
  try {
    const { email, password } = req.body;
    // Check if user exists

    await Admin.findOne({ email }).then((user) => {
      // console.log(user);
      // console.log("EMAIL :: ", user)
      if (!user) {
        return res.status(400).json({ error: "Invalid email or password" });
      }
      else if (user.active == "pending") {
        return res.status(400).json({ error: "Your KYC is Pending " });
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
              status: "Admin",
              id: user.mandalname,
              address: user.address,
              district:user?.district,
              name: user.name,
              active: user.active
            })
          })
        }
        else {
          return res.status(400).json({ error: "Invalid email or password" });
        }

      })
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Semething Went Wrong" });
  }
};

exports.getallmandals = async (req, res) => {
  try {
    const allmandals = await admin.find()
    // console.log(allmandals);
    return res.status(201).json({
      data: allmandals,
      status: "success",
      message: "candidate get successfully"
    })
  }
  catch (err) {
    console.log(err.message)
  }
}

exports.forgetPass = async (req, res) => {
  try {
    const { email, password } = req.body;
    const b_password = await bcrypt.hash(password, 10,)

    const existingUser = await admin.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({
        message: "Email not found",
        status: "error"
      });
    }

    const forget = await admin.findOneAndUpdate(
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
    console.log(error.message);
  }
}

exports.getprofile = async (req, res) => {
  try {
    const profile = await Admin.findOne({ mandalname: req.body.id })
    if (profile) {
      return res.status(200).json({
        status: "success",
        message: "profile find successfully",
        data: profile
      })
    }
  } catch (error) {
    console.log(error.message);
  }
}




exports.deactivate = async (req, res) => {
  // console.log(req.params);
  try {
    const { isActive } = req.body;
console.log(isActive);

    const update = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {

          isActive: isActive
        }
      },
      { new: true }
    )
    if (update) {
      return res.status(200).json({
        message: "user Deactivate successfully",
        data: update

      })

    }
  } catch (error) {
    return res.status(400).json({
      message: error
    });
  }
}
