import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext"



function SignUp() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useUserAuth();
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try {
            await signUp(email, password);
            navigate("/login");
        } catch (err) {
            setError(err.message);
        }
    }


    return (
        <div>
            <div>
                <div className="wrapper">
                    <div className="logo">
                        <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" />
                    </div>
                    <div className="text-csenter mt-4 name">
                        SignUp
                        
                    </div>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <form onSubmit={handleSubmit} className="p-3 mt-3">
                        <div className="form-field d-flex align-items-center">
                            <span className="far fa-user"></span>
                            <input type="text" name="userName" id="userName" placeholder="Email address"
                                onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="form-field d-flex align-items-center">
                            <span className="fas fa-key"></span>
                            <input type="password" name="password" id="pwd" placeholder="Password"
                                onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <button className="btn mt-3">SignUp</button>
                    </form>
                    <div className="text-center fs-6">
                        <Link to="/login" >Log In</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp