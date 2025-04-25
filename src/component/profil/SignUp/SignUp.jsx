import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import submitRules from '../UseConnection';
import './SignUp.css';
import axios from "axios";

export default function SignUp() {

    const [show, setShow] = useState(false);
    const [user, setUser] = useState({ username: "", email: "", password: "" })
    const navigate = useNavigate();

    // change les valeur de user avec onchange
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(`${e.target.name} : ${e.target.value}`);
    }

    const handleNewUser = async () => {
        // e.prevenDefault()
        const passwordVerif = document.getElementById("passwordVerif").value;

        if (user.password.length >= 5 && user.password.length <= 16) {
            if (user.password === passwordVerif) {
                if (submitRules(user.username, user.email, user.password) && username != null && email != null) {
                    user.username.trim();
                    user.email.trim();
                    user.password.trim();
                    const response = await axios.post("http://localhost:8080/connection/signUp", user);
                    if (response.data) {
                        navigate("/login");
                    } else {
                        alert("Server is experiencing difficulties, please try again later.");
                    }
                } else {
                    alert("Credentials cannot contain special characters or spaces and email must contain : @ and .");
                }
            } else {
                alert("Passwords are mismatching");
            }
        } else {
            alert("Password must be 5 to 16 characters long.");
        }
    }

    return (
        <div className="form-grid-signIn">
            <h1 style={{ color: localStorage.getItem("Title-Colors") }}>SIGN UP</h1>
            <form>

                <h4>Username</h4>
                <input type="text" name="username" placeholder="playerOne" required onChange={handleChange} />
                <p className="info-text">cannot be changed later</p>
                <h4>
                    Password
                    <span onClick={(event) => setShow(s => !s)} className="material-symbols-outlined show_icon">
                        visibility
                    </span>
                </h4>
                <input type={show ? "text" : "password"} name="password" min={5} onChange={handleChange} />
                <p className="info-text">5-16 charachters & no special charachters</p>
            </form>
            <form>
                <h4>Email</h4>
                <input type="text" name="email" onChange={(e) => handleChange(e)} />
                <p className="info-text">exemple : test@gmail.com</p>
                <h4>Confirm Password</h4>
                <input type={show ? "text" : "password"} name="passwordVerif" id="passwordVerif" onChange={handleChange} />
            </form>
            <Link to={"/logIn"}><p style={{ textAlign: "left" }}>Already have an account?</p></Link>
            <div>
                <button style={{ color: "green", marginRight: "10px" }} onClick={handleNewUser}>Sign In</button>
                <Link to={"/"}><button style={{ color: "red" }}>Cancel</button></Link>
            </div>
        </div>
    )
}