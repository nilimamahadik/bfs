
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
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

const UserSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [mandalname, setMandalName] = useState("");
  const [data, setData] = useState([])
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [code, setCode] = useState("")

  const handleSelectChange = (e) => {
    const [mandalname, address] = e.target.value.split(',');
    setMandalName(mandalname);
    setAddress(address);
  };

  useEffect(() => {
    const getallmandals = async () => {
      const get = axios.get(`${BASEURL}/getallmandals`)
        .then((res) => {

          //console.log(res)
          setData(res.data.data);
        })
        .catch((err) => {
          //console.log(err);
        })
    }
    getallmandals();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();


    fetch(`${BASEURL}/create_user_account`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        // mandalname,
        name,
        phone,
        // address,
        email,
        password,
        status: "pending",
        code
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "userRegister");
        if (data.status === "User") {

          alert("Registration Successful");
          navigate(`/userlogin`)

        } else {
          alert(data.message);
        }
      });
  };
  // console.log(data);
  return (
    <div className="background-container">
      <Container component="main" maxWidth="xs">
        <div className="imageoverlay">
          <Typography variant="h5" style={{ textAlign: "center", fontSize: "30px", color: "black", marginTop: "30px" }}>Sign Up</Typography>
          <form onSubmit={handleSubmit}>
            {/* <div className="mb-3">
          <label>Association Name</label>
          <Select
            fullWidth
            value={mandalname + "," + address}
            onChange={(e) => handleSelectChange(e)}
          >
            <MenuItem value="">
              <em>Select a Group</em>
            </MenuItem>
            {data.map((option) => (
              <MenuItem
                value={`${option.mandalname},${option.address}`}
                key={option.id}
              >
                {option.mandalname}
              </MenuItem>
            ))}
          </Select>
        </div> */}
            <TextField
              fullWidth
              label="Company Code"
              type="text"
              required
              placeholder="Enter your Company Code"
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
            <p style={{ fontSize: "10px", textAlign: "right" }}>For company code. Please contact company officials. </p>

            <TextField
              fullWidth
              label="User Full Name"
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
              label="User Phone Number"
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
              label="User Email address"
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

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>

            <Typography variant="body2" align="right" style={{ color: "black", fontSize: "16px" }}>
              Already registered? <a href="/userlogin" style={{ color: "black" }}>Login</a>
            </Typography>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default UserSignUp;