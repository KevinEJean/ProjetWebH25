import React, { useState } from "react";
import { data, Link, useNavigate } from 'react-router-dom';
import submitRules from '../UseConnection';
import './LogIn.css';
import axios from 'axios';

export default function LogIn() {

    const [show, setShow] = useState(false);
    const [user, setUser] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        if (user.username == "" || user.password == "") {
            alert("The fields are empty");
        } else {
            if (submitRules(user.username, "@.", user.password)) {
                user.username.trim();
                user.password.trim();
                try {
                    const response = await axios.post("http://localhost:8080/connection/login", user);
                    if (response.data) {
                        sessionStorage.setItem("id", response.data.id);
                        sessionStorage.setItem("username", response.data.usernameResponse);
                        sessionStorage.setItem("onlineStatus", response.data.onlineStatus);
                        navigate("/profil");
                    } else {
                        alert("Incorrect login credentials, please try again.");
                    }
                } catch (error) {
                    alert("Server is experiencing difficulties, please try again later.");
                    console.error(error);
                }
            } else {
                alert("Credentials cannot contain special characters or spaces. Also the password must be 5 to 16 characters long.");
            }
        }
    }

    return (
        <div className="form-grid-logIn" >
            <h1 style={{ color: localStorage.getItem("Title-Colors") }}>LOG IN</h1>
            <form>
                <h4>Username</h4>
                <input type="text" name="username" onChange={handleChange} />
                <h4>
                    Password
                    <span onClick={() => setShow(s => !s)} class="material-symbols-outlined show_icon">
                        visibility
                    </span>
                </h4>
                <input type={show ? "text" : "password"} name="password" onChange={handleChange} />
            </form>

            <Link to={"/signUp"}><p name="toSignUp">Don't have an account?</p></Link>
            <div>
                <button onClick={(e) => handleLogin(e)} id="login-btn" style={{ color: "green", marginRight: "10px" }}>Log In</button>
                <Link to={"/"}><button style={{ color: "red" }}>Cancel</button></Link>
            </div>
        </div>
    )
}