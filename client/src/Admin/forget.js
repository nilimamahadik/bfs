import axios from 'axios';
import React, { useMemo, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

 //for developement
// const BASEURL = "http://localhost:5000/api"

//for production

const BASEURL = "/api"

const Forget = () => {

    const navigate = useNavigate();
    const mystyle = {
        color: "#D10000",
        backgroundColor: "#FFD2D2",
        padding: "3px 10px",
        border: "1px solid red",
        borderRadius: "5px",
        marginTop: "5px",
    };

    const [data, setData] = useState({});
    const [errorPass, seterrorPass] = useState("");
    const [errorCPass, seterrorCPass] = useState("");
    const [error, setError] = useState(false);
    function validatePass() {
        let valid = false;
        if (data["password"] === "") {
            seterrorPass("Enter password.");
            valid = false;
        } else if (typeof data["password"] === "undefined") {
            seterrorPass("Enter password.");
            valid = false;
        } else if (data["password"].length < 6) {
            seterrorPass("Enter atleast 6 character.");
            valid = false;
        } else {
            seterrorPass("");
            valid = true;
        }
        return valid;
    }
    function validateCPass() {
        let valid = false;
        if (data["password_confirmation"] === "") {
            seterrorCPass("Enter confirm password.");
            valid = false;
        } else if (typeof data["password_confirmation"] === "undefined") {
            seterrorCPass("Enter confirm password.");
            valid = false;
        } else if (data["password_confirmation"].length < 6) {
            seterrorCPass("Enter atleast 6 character.");
            valid = false;
        } else if (data["password_confirmation"] !== data["password"]) {
            seterrorCPass("Confirmm password is mismatched.");
            valid = false;
        } else {
            seterrorCPass("");
            valid = true;
        }
        return valid;
    }
    function validateForm() {
        let pass = validatePass();
        let cpass = validateCPass();
        let valid = pass && cpass;
        return valid;
    }
    function onChangeData(e) {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value,
        }));
    }

    async function onSubmitForm(e) {
        e.preventDefault();

        if (validateForm()) {
            const user = {
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation,
            }
            const submit = await axios.patch(`${BASEURL}/forget_pass`, user)
            if (submit.data.status === "success") {
                alert("Password Change Successfully")
                navigate('/adminlogin')
            }
            //   setError(false)
        } else {
            //   setError(true)
            console.log("something wrong");
        }
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <div class=" modal form-modal" style={{ display: "block" }}>
                    <div class="modal-dialog max-width-px-840 position-relative"></div>
                    <div class="login-modal-main">
                        <div class="row no-gutters">
                            <div class="col-md-3 col-lg-4"></div>
                            <div class="col-md-6 col-lg-4">
                                <div class="row">
                                    <h1>
                                        <br />
                                        <br />
                                    </h1>
                                    <div class="heading">
                                        <h3>Forget Password</h3>
                                        {/* <p>Enter your email and set new password.</p> */}
                                    </div>
                                    {/* <h1>
                                    <br />
                                    <br />
                                </h1> */}
                                    <form
                                        onSubmit={onSubmitForm}
                                    >
                                        <div class="form-group">
                                            <label for="email" class="label">
                                                E-mail
                                            </label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                placeholder="example@gmail.com"
                                                id="email"
                                                name="email"
                                                value={data.email}
                                                onChange={onChangeData}
                                            //   onBlur={validateEmail}
                                            />
                                            {/* {errorEmail&& <div style={mystyle}>{errorEmail}</div>} */}
                                        </div>
                                        {/* 
                                    <div class="form-group mb-8 button">
                                        <button class="btn ">Next</button>
                                    </div> */}
                                        <br />
                                        <div class="form-group">
                                            <label for="password" class="label">
                                                Set New Password
                                            </label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                placeholder="Enter new password"
                                                id="password"
                                                name="password"
                                                value={data.password}
                                                onChange={onChangeData}
                                            onBlur={validatePass}
                                            />
                                            {errorPass && <div style={mystyle}>{errorPass}</div>}
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <label for="password_confirmation" class="label">
                                                Confirm Password
                                            </label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                placeholder="Enter confirm password"
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                value={data.password_confirmation}
                                                onChange={onChangeData}
                                            onBlur={validateCPass}
                                            />
                                            {errorCPass && <div style={mystyle}>{errorCPass}</div>}
                                        </div>
                                        <br />
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Forget;