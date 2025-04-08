import React, { Component, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material";
import '../Admin/Admin.css'

//for developement
// const BASEURL = "http://localhost:5000/api"

//for production

const BASEURL = "/api"

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //  console.log(email, password);

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = {
      email,
      password,
    }

    fetch(`${BASEURL}/authenticate_user`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        ////console.log(data.status == "User");
        // //console.log("EMAIL :: ", user)
        if (data.status == "User") {
          //console.log(data);

         
          alert("login successful");
          localStorage.setItem("link", JSON.stringify(data));
          navigate(`/form/${data.id}`);
                    
        } else {
          alert(JSON.stringify(data.error));
        }
      });
  }

  return (
    <div className="background-container">
      <Container component="main" maxWidth="xs"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh", // Center vertically
        }}>
        <div className="imageoverlay">
          <Typography variant="h5" style={{ textAlign: "center", fontSize: "30px", color: "black" }}>Login</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              // InputProps={{
              //   style: {
              //     borderRadius: "10px", // Set the border radius
              //     color: "black",
              //   },
              //   notched: false, // Remove the notch border
              // }}
              // InputLabelProps={{
              //   style: {
              //     color: "black", // Set the label color to black
              //   },
              // }}
              // sx={{
              //   "& fieldset": {
              //     borderColor: "black", // Set the border color to black
              //   },
              // }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              // InputProps={{
              //   style: {
              //     borderRadius: "10px", // Set the border radius
              //     color: "black",
              //   },
              //   notched: false, // Remove the notch border
              // }}
              // InputLabelProps={{
              //   style: {
              //     color: "black", // Set the label color to black
              //   },
              // }}
              // sx={{
              //   "& fieldset": {
              //     borderColor: "black", // Set the border color to black
              //   },
              // }}
            />

            <Typography variant="body2" align="right" style={{ color: "black", fontSize: "16px" }}>
              <a href="/User/forget" className="font-size-3 text-dodger line-height-reset" style={{ color: "black" }}>
                Forgot Password
              </a>
            </Typography>
            <div style={{ paddingBottom: "5px", paddingTop: "5px" }}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
            </div>

            <Typography variant="body2" align="right" style={{ color: "black", fontSize: "16px" }}>
              Don't have an account?<a href="/usersignup" style={{ color: "black" }}> Sign up</a>
            </Typography>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default UserLogin;