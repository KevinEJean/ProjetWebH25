import React, { useState } from "react";
import { Link } from "react-router-dom";
import submitRules, { handleLogOut } from '../UseConnection';
import axios from "axios";
import './ResetPage.css';

export default function ResetPassword() {

    const [show, setShow] = useState();
    const [user, setUser] = useState({passwd: "", passwdVerif: ""});

    const username = sessionStorage.getItem("username");


    const handleChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value});
    }

    const passwordReset = (e) => {

        e.prevenDefault();

        if (user.passwd == "" || user.passwdVerif == "") {
            alert("The fields are empty");
        } else {
            if (user.passwd != user.passwdVerif) {
                if (submitRules(passwd, "@.", user.passwdVerif)) {
                    user.passwd.trim();
                    try {
                        axios.put(`http://localhost:8080/client/updatePassword/${username}/${user.passwd}`);
                    } catch (error) {
                        alert("Server is experiencing difficulties, please try again later.");
                        console.error(error);
                    }
                } else {
                    alert("Credentials cannot contain special characters or spaces. Also the password must be 5 to 16 characters long.");
                }
            } else {
                alert("Passwords are mismatching !");
            }
        }
    }

    return (
        <div className="form-grid-1x2">
            <form className="form">
                <h1 style={{ color: localStorage.getItem("Title-Colors") }}>PASSWORD RESET</h1>
                <p className="alt-info">Cannot contain any special characters and must be between 5 - 16 letters or numbers</p>
                <h4>
                    Password
                    <span onClick={(event) => setShow(s => !s)} class="material-symbols-outlined show_icon">
                        visibility
                    </span>
                </h4>
                <input type={show ? "text" : "password"} id="passwd" onChange={handleChange} />
                <h4>Confirm Password</h4>
                <input type={show ? "text" : "password"} id="passwdVerif" onChange={handleChange} />
                <div>
                    <button onClick={passwordReset} style={{ color: "green", marginRight: "10px" }}>Confirm</button>
                    <Link to={"/"}><button style={{ color: "red" }}>Cancel</button></Link>
                </div>
            </form>
        </div>
    )
}