import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./signup.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  requestRegister,
  requestCountry,
  requestCity,
  requestState,
  userLogout,
} from "../Redux/actions";
import Swal from "sweetalert2";



const PartnerSignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [role, setRole] = React.useState("");
  const [erroremail, seterroremail] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;

    // Validate that the phone number is a 10-digit number
    if (/^\d{10}$/.test(input)) {
      setPhoneNumberError(""); // Reset error state if valid
      setPhoneNumber(input);
      setPhone(input);
    } else {
      setPhoneNumberError("Phone number must be a 10-digit number.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.userLogout();
    if (phoneNumberError) {
      alert(phoneNumberError);
      return;
    }

    props.requestRegister({
      data: {
        name,
        phone,
        address,
        pincode,
        email,
        password,
        role
      },
    });
  };

  useEffect(() => {
    let registerdata = props.candidate.registerData;
    if (registerdata !== undefined) {
      if (registerdata?.data?.status === "success") {
        props.candidate.registerData = undefined;
        Swal.fire("Good job!", "Registration successfully.", "success");
   
          navigate("/partnerlogin");

      } else {
        Swal.fire("Sorry!", "Email is already used.", "error");
        seterroremail("Email is already used.");
        setError(true);
      }
    }
  }, [props.candidate.registerData]);

  return (
    <div className="background">
      <Container component="main" maxWidth="xs">
        <div>
          {/* <Typography variant="h5">Registration</Typography> */}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label=" Full Name"
              type="text"
              required
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              InputProps={{
                style: {
                  border: "1px solid white", // White border
                  borderRadius: "10px", // Border radius
                  color: "white", // Text color
                },
              }}
              InputLabelProps={{
                style: {
                  color: "white", // Label color
                },
              }}
            />

            <TextField
              fullWidth
              label=" Phone Number"
              type="text"
              required
              placeholder="Phone"
              onChange={handlePhoneNumberChange}
              margin="normal"
              InputProps={{
                style: {
                  border: "1px solid white", // White border
                  borderRadius: "10px", // Border radius
                  color: "white", // Text color
                },
              }}
              InputLabelProps={{
                style: {
                  color: "white", // Label color
                },
              }}
            />
            {phoneNumberError && (
              <Typography
                variant="caption"
                style={{ color: "red", marginTop: "10px" }}
              >
                {phoneNumberError}
              </Typography>
            )}

            <TextField
              fullWidth
              label=" Address"
              type="text"
              required
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              margin="normal"
              InputProps={{
                style: {
                  border: "1px solid white", // White border
                  borderRadius: "10px", // Border radius
                  color: "white", // Text color
                },
              }}
              InputLabelProps={{
                style: {
                  color: "white", // Label color
                },
              }}
            />

            <TextField
              fullWidth
              label="Pin Code"
              type="text"
              required
              placeholder="Pin Code"
              onChange={(e) => setPincode(e.target.value)}
              margin="normal"
              InputProps={{
                style: {
                  border: "1px solid white", // White border
                  borderRadius: "10px", // Border radius
                  color: "white", // Text color
                },
              }}
              InputLabelProps={{
                style: {
                  color: "white", // Label color
                },
              }}
            />

            <TextField
              fullWidth
              label=" Email address"
              type="email"
              required
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              InputProps={{
                style: {
                  border: "1px solid white", // White border
                  borderRadius: "10px", // Border radius
                  color: "white", // Text color
                },
              }}
              InputLabelProps={{
                style: {
                  color: "white", // Label color
                },
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              required
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              InputProps={{
                style: {
                  border: "1px solid white", // White border
                  borderRadius: "10px", // Border radius
                  color: "white", // Text color
                },
              }}
              InputLabelProps={{
                style: {
                  color: "white", // Label color
                },
              }}
            />

            <br />
            <br />

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ color: "white" }}
                  required
                >
                  Are You Employee?
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="Are You Employee "
                  onChange={handleChange}
                  style={{
                    border: "1px solid white",
                    borderRadius: "10px",
                    color: "white",
                  }}
                >
                  <MenuItem value="employee">Yes</MenuItem>
                  <MenuItem value="proxy">No</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <br />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>

            <Typography
              align="right"
              style={{ color: "white", fontSize: "16px" }}
            >
              Already have an account?{" "}
              <a href="/partnerlogin" style={{ color: "white" }}>
                Log In
              </a>
            </Typography>
          </form>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { candidate: state.candidate };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestRegister, userLogout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PartnerSignUp);
