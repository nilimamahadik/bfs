import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import './signup.css'

//for developement
// const BASEURL = "http://localhost:5000/api"

//for production

const BASEURL = "/api"

const AdminSignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [mandalname, setMandalName] = useState("");
  const [registration, setRegistration] = useState("")
  const [pincode, setPincode] = useState("")
  const [code, setCode] = useState("")
  const [district, setDistrict] = useState("")


  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();


    fetch(`${BASEURL}/create_admin_account`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        mandalname,
        registration,
        name,
        phone,
        address,
        pincode,
        email,
        password,
        district,
        active: "pending",
        code
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "Admin") {
          alert("Registration Successful");
          navigate("/adminlogin")
        } else {
          alert(data.message);
        }
      });
  };

  return (
    <div className="background-container">
      <Container component="main" maxWidth="xs" >
        <div className="imageoverlay">
          <Typography variant="h5">Registration</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Organization Name"
              type="text"
              required
              placeholder=" Organization Name"
              onChange={(e) => setMandalName(e.target.value)}
              margin="normal"
            // InputProps={{
            //   style: {
            //     border: "1px solid black", // black border
            //     borderRadius: "10px", // Border radius
            //     color: "black", // Text color
            //   },
            // }}
            // InputLabelProps={{
            //   style: {
            //     color: "black", // Label color
            //   },
            // }}
            />

            <TextField
              fullWidth
              label="Registration Number"
              type="text"
              placeholder="Registration Number"
              onChange={(e) => setRegistration(e.target.value)}
              margin="normal"
            // InputProps={{
            //   style: {
            //     border: "1px solid black", // black border
            //     borderRadius: "10px", // Border radius
            //     color: "black", // Text color
            //   },
            // }}
            // InputLabelProps={{
            //   style: {
            //     color: "black", // Label color
            //   },
            // }}
            />

            <TextField
              fullWidth
              label="Admin Full Name"
              type="text"
              required
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              margin="normal"
            // InputProps={{
            //   style: {
            //     border: "1px solid black", // black border
            //     borderRadius: "10px", // Border radius
            //     color: "black", // Text color
            //   },
            // }}
            // InputLabelProps={{
            //   style: {
            //     color: "black", // Label color
            //   },
            // }}
            />

            <TextField
              fullWidth
              label="Admin Phone Number"
              type="text"
              required
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              margin="normal"
            // InputProps={{
            //   style: {
            //     border: "1px solid black", // black border
            //     borderRadius: "10px", // Border radius
            //     color: "black", // Text color
            //   },
            // }}
            // InputLabelProps={{
            //   style: {
            //     color: "black", // Label color
            //   },
            // }}
            />

            <TextField
              fullWidth
              label="Organization Address"
              type="text"
              required
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              margin="normal"
            // InputProps={{
            //   style: {
            //     border: "1px solid black", // black border
            //     borderRadius: "10px", // Border radius
            //     color: "black", // Text color
            //   },
            // }}
            // InputLabelProps={{
            //   style: {
            //     color: "black", // Label color
            //   },
            // }}
            />
            <TextField
              fullWidth
              label="District"
              type="text"
              required
              placeholder="Enter District"
              onChange={(e) => setDistrict(e.target.value)}
              margin="normal"
            // InputProps={{
            //   style: {
            //     border: "1px solid black", // black border
            //     borderRadius: "10px", // Border radius
            //     color: "black", // Text color
            //   },
            // }}
            // InputLabelProps={{
            //   style: {
            //     color: "black", // Label color
            //   },
            // }}
            />

            <TextField
              fullWidth
              label="Pin Code"
              type="text"
              required
              placeholder="Pin Code"
              onChange={(e) => setPincode(e.target.value)}
              margin="normal"
            // InputProps={{
            //   style: {
            //     border: "1px solid black", // black border
            //     borderRadius: "10px", // Border radius
            //     color: "black", // Text color
            //   },
            // }}
            // InputLabelProps={{
            //   style: {
            //     color: "black", // Label color
            //   },
            // }}
            />

            <TextField
              fullWidth
              label="Admin Email address"
              type="email"
              required
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
            // InputProps={{
            //   style: {
            //     border: "1px solid black", // black border
            //     borderRadius: "10px", // Border radius
            //     color: "black", // Text color
            //   },
            // }}
            // InputLabelProps={{
            //   style: {
            //     color: "black", // Label color
            //   },
            // }}
            />

            <TextField
              fullWidth

              label="Password"
              type="password"
              required
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
            // InputProps={{
            //   style: {
            //     border: "1px solid black", // black border
            //     borderRadius: "10px", // Border radius
            //     color: "black", // Text color
            //   },
            // }}
            // InputLabelProps={{
            //   style: {
            //     color: "black", // Label color
            //   },
            // }}
            />

            <TextField
              fullWidth
              label="Organization Code"
              type="text"
              required
              placeholder="For Example 123456"
              onChange={(e) => setCode(e.target.value)}
              margin="normal"
            // InputProps={{
            //   style: {
            //     border: "1px solid black", // black border
            //     borderRadius: "10px", // Border radius
            //     color: "black", // Text color
            //   },
            // }}
            // InputLabelProps={{
            //   style: {
            //     color: "black", // Label color
            //   },
            // }}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>

            <Typography align="right" style={{ color: "black", fontSize: "16px" }}>
              Already have an account? <a href="/adminlogin" style={{ color: "black" }}>Log In</a>
            </Typography>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AdminSignUp;