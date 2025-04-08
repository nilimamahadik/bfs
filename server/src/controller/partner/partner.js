const Partner = require("../../models/partner/partner");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const admin = require("../../models/admin");
const User = require("../../models/user");
const Admin = require("../../models/admin");

// Make sure to replace this with the actual path to your Partner model
exports.getPartnerProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Partner.findById(id).exec();
    if (response) {
      return res.status(200).json({
        status: "success",
        data: response,
        message: "profile get succesfully",
      });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal problem" });
  }
};

exports.adminupdate = async (req, res) => {
  // console.log(req.params);
  try {
    const update = await Partner.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          active: "success",
        },
      },
      { new: true }
    );

    if (update) {
      return res.status(201).json({
        message: "request find successfully",
        data: update,
        status: "success",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

exports.admin_action = async (req, res) => {
  // console.log(req);
  try {
    // Assuming req.body.active is the status you want to filter on
    const pendinguser = await Partner.find();


    return res.status(200).json({
      message: "Request find successful",
      data: pendinguser,
      status: "success",
      // count: pendinguser.length,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

// exports.admin_action = async (req, res) => {
//   console.log(req);
//   try {
//     const Partner = req.body.id
//     // console.log(group);
//     console.log(Partner);
//     const pendinguser = await Partner.find({ active: req.body.active })
//     console.log(pendinguser);
//     return res.status(201).json({
//       message: "request find successfully",
//       data: pendinguser,
//       // count: pendinguser.length
//     })

//   } catch (error) {
//     return res.status(400).json({
//       message: error
//     });
//   }
// }

exports.create_partner_account = async (req, res) => {
  //console.log(req.body);
  try {
    const existingEmailPartner = await Partner.findOne({
      email: req.body.email,
    }).exec();
    if (existingEmailPartner) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const {
      name,
      phone,
      address,
      pincode,
      email,
      password,
      role,
      // active,
    } = req.body;
    // console.log(employee);

    // console.log(password)

    const _partner = new Partner({
      name,
      phone,
      address,
      pincode,
      email,
      password,
      role,

      // active,
    });
    // console.log(password);
    // console.log(_partner);
    _partner.password = await bcrypt.hash(password, 10);
    // _partner.selectedValue = employee;

    // console.log("USER :: ",_user)
    // console.log("_partner ::", _partner);
    const savedPartner = await _partner.save();
    if (savedPartner) {
      return res.status(201).json({
        message: "User created successfully",
        data: _partner,
        status: "success",
      });
    }
    // console.log(res);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

exports.authenticate_partner = async (req, res) => {
  //console.log(req.body)
  try {
    const { email, password } = req.body;
    // Check if user exists

    await Partner.findOne({ email }).then((user) => {
      // console.log(user);
      // console.log("EMAIL :: ", user)
      if (!user) {
        return res.status(400).json({ error: "Invalid email or password" });
      } else if (user.active == "pending") {
        return res
          .status(400)
          .json({
            error:
              "Your request is currently pending. Please contact our support team.",
          });
      }

      bcrypt.compare(password, user.password, function (error, isMatch) {
        // console.log("MATCH :: ", isMatch)
        if (isMatch) {
          const payload = {
            id: user.id,
            email: user.email,
          };
          jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 31556926 },
            (err, token) => {
              return res.status(200).json({
                data: { id: user.id, token: token, role: user.role },
                message: "Sign In success",
                status: "success",
              });
              //   return res.status(201).json({
              //     data :{id: savedUser.id ,token:token , first_name:first_name , last_name:last_name, block:savedUser.deleted},
              //     status :"success",
              //     message:"Candidate registered successfully"

              // })
            }
          );
        } else {
          return res.status(400).json({ error: "Invalid password" });
        }
      });
    });
  } catch (error) {
    //console.log(error);
    res.status(400).json({ error: "Semething Went Wrong" });
  }
};

exports.forget_partner = async (req, res) => {
  try {
    const { email, password } = req.body;
    const b_password = await bcrypt.hash(password, 10);

    const existingUser = await Partner.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({
        message: "Email not found",
        status: "error",
      });
    }

    const forget = await Partner.findOneAndUpdate(
      { email: email },
      {
        $set: {
          password: b_password,
        },
      },
      { new: true }
    );
    if (forget) {
      return res.status(200).json({
        message: "forget password successful",
        status: "success",
      });
    }
  } catch (error) {
    //console.log(error.message);
  }
};
