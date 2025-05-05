import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import submitRules from '../UseConnection';
import './SignUp.css';
import axios from "axios";

export default function SignUp() {

    const [show, setShow] = useState(false);
    const [user, setUser] = useState({ username: "", email: "", password: "" })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleNewUser = async (e) => {
        e.preventDefault();
        const passwordVerif = document.getElementById("passwordVerif").value;

        if (user.password.length >= 5 && user.password.length <= 16) {
            if (user.password === passwordVerif) {
                if (submitRules(user.username, user.email, user.password) && user.username != null && user.email != null) {
                    user.username.trim();
                    user.email.trim();
                    user.password.trim();
                    try {
                        const response = await axios.post("http://localhost:8080/connection/signup", user);
                        if (response.data) {
                            console.log(response.data)
                            sessionStorage.setItem("id", response.data.id);
                            sessionStorage.setItem("username", response.data.usernameResponse);
                            sessionStorage.setItem("onlineStatus", response.data.onlineStatus);
                            navigate("/profil");
                        } else {
                            alert("One or more of your credentials are not allowed, you cannot be named 'admin' or 'del-user' !");
                        }
                    } catch (error) {
                        alert("Server is experiencing difficulties, please try again later.");
                        console.error();
                    }
                } else {
                    alert("Credentials cannot contain special characters or spaces and email must contain : @ and .");
                }
            } else {
                alert("Passwords are mismatching !");
            }
        } else {
            alert("Password must be 5 to 16 characters long.");
        }
    }

    return (
        <>
            <form className="form" onSubmit={(e) => handleNewUser(e)}>
                <div className="title">Welcome</div>
                <div className="subtitle">Let's create your account!</div>

                <div className="input-container ic1">
                    <input name="username" type="text" required placeholder="Username" onChange={handleChange} />
                </div>

                <div className="input-container ic2">
                    <input name="email" type="email" required placeholder="Email" onChange={handleChange} />
                </div>

                <div className="input-container ic2">
                    <input name="password" type={show ? "text" : "password"} required placeholder="Password" min={5} onChange={handleChange} />
                </div>

                <div className="input-container ic2">
                    <input type={show ? "text" : "password"} name="passwordVerif" id="passwordVerif" required placeholder="Confirm Password" onChange={handleChange} />
                    <span onClick={() => setShow(s => !s)} className="material-symbols-outlined show_icon" >visibility</span>
                </div>

                <div className="input-container ic2">
                    <Link to={"/logIn"}>
                        <p style={{ textAlign: "center", color: "blue" }}>Already have an account?</p>
                    </Link>
                </div>

                <button type="submit" className="submit">Sign Up</button>
            </form>
        </>
    )
}