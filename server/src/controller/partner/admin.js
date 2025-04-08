const partnerAdmin = require("../../models/partner/admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const upload = require("../../models/partner/upload");

exports.getPartnerAdminProfile = async(req, res) => {
  try{
    const id = req.params.id;
    const response = await partnerAdmin.findById(id).exec()
    if(response){
      return res.status(200).json({
        status: "success",
        data: response,
        message: "Admin profile get succesfully"
      })
    }
// console.log(response);
  }catch(err){
    return res.status(500).json({ message: "Internal problem" });
  }
}

exports.partnerAdminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user exists

    await partnerAdmin.findOne({ email }).then((user) => {
      // console.log(user);
      // console.log("EMAIL :: ", user)
      if (!user) {
        return res.status(400).json({ error: "Invalid email or password" });
      } else if (user.active == "pending") {
        return res.status(400).json({ error: "Your request is currently pending. Please contact our support team." });
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
                data: { id: user.id, token: token, role:user.role },
                message: "Sign In success",
                status: "success",
              });
            }
          );
        } else {
          console.error(error);
          return res.status(400).json({ error: "Invalid password" });
        }
      });
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal problem" });
  }
};

exports.getShopsData = async (req, res) => {
  // console.log(req);
  try {
    const response = await upload.find();
    if (response.length > 0) {
      return res.status(200).json({
        data: { response },
        status: "success",
      });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal problem" });
  }
};

exports.getSpecShopData = async (req, res) => {
  // console.log(req.params);
  try {
    const response = await upload.find({ p_id: req.params.id });
    if (response.length > 0) {
      return res.status(200).json({
        data: { response },
        status: "success",
      });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal problem" });
  }
};
