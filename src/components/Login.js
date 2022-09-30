import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext"
import { Alert } from "react-bootstrap";
import axios from "axios";
//import GoogleLogin from "./GoogleLogin";


const Login = ({ children }) => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [payload, setPayload] = useState("vvdvdvdvdvdvv");
    const [password, setPassword] = useState("");
    const { logIn, googleSignIn, user } = useUserAuth();
    // let { user } = useUserAuth();

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        setPayload("dccdccd")
        try {
            await logIn(email, password);

            navigate("/home");
            console.log(email)
            console.log(password)
            console.log(payload)
            const newLOguser1 = {
                email,
                password,
                payload
            }
            axios.post("http://ec2-54-91-203-24.compute-1.amazonaws.com:8090/loguser/add", newLOguser1).then(() => {
                alert("user add")
                console.log("addd")

            }).catch((err) => {
                alert(err)
            })
        } catch (err) {
            setError(err.message);
        }

    }

    const handleGooglesignIn = async (e) => {

        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/home")
        } catch (error) {
            setError(error.message);
        }
    }


    console.log(user)
    return (
        <div>
            <div className="wrapper">
                <div className="logo">
                    <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" />
                </div>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="text-center mt-4 name">
                    LOGIN
                </div>
                <form onSubmit={handleSubmit} className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input type="text" name="userName" id="userName" placeholder="Email"
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="password" name="password" id="pwd" placeholder="Password"
                            onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <button className="btn mt-3">Login</button>
                    <GoogleButton className="btn mt-3" onClick={handleGooglesignIn}>Google Login</GoogleButton>

                </form>
                <div className="text-center fs-6">
                    or <Link to="/signup" >Sign up</Link>
                </div>

            </div>
        </div>


    )
}

export default Login