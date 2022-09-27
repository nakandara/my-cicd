import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext"
import { Alert } from "react-bootstrap";


function Login() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try {
            await logIn(email, password);
            navigate("/home");
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
    return (
        <div>
            <div className="wrapper">
                <div className="logo">
                    <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" />
                </div>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="text-center mt-4 name">
                    Login
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
                    <a>Forget password?</a> or <Link to="/signup" >Sign up</Link>
                </div>

            </div>
        </div>


    )
}

export default Login