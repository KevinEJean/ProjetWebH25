import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import submitRules from "../profil/UseConnection";
import axios from "axios";
import './ResetPage.css';  

export default function ResetPassword() {
    const navigate = useNavigate()
    const [show, setShow] = useState();
    const [user, setUser] = useState({username: "", passwd: "", passwdVerif: ""});


    const handleChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value});
    }

    const passwordReset = (e) => {

        e.preventDefault();

        if (user.passwd == "" || user.passwdVerif == "") {
            alert("The fields are empty");
        } else {
            if (user.passwd === user.passwdVerif) {
                if (submitRules(user.username, "@.", user.passwd)) {
                    user.username.trim();
                    user.passwd.trim();
                    try {
                        axios.put(`http://localhost:8080/client/updatePassword/${user.username}/${user.passwd}`)
                        .then(() => {
                            navigate("/profil")
                            alert("your password have been update with succèes")

                        })
                    } catch (error) {
                        alert("Server is experiencing difficulties, please try again later.");
                        console.error(error);
                    }
                } else {
                    alert("Credentials cannot contain special characters or spaces. Also the password must be 5 to 16 characters long and cannot be only numbers !");
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
                <h4>Username</h4>
                <input type="text" id="username" onChange={handleChange} />
                <h4>
                    Password
                    <span onClick={() => setShow(s => !s)} class="material-symbols-outlined show_icon">
                        visibility
                    </span>
                </h4>
                <input type={show ? "text" : "password"} id="passwd" onChange={handleChange} />
                <h4>Confirm Password</h4>
                <input type={show ? "text" : "password"} id="passwdVerif" onChange={handleChange} />
                <div>
                    <button id="confirmBtn" onClick={(e) => passwordReset(e)} style={{ color: "green", marginRight: "10px" }}>Confirm</button>
                    <Link to={"/"}><button style={{ color: "red" }}>Cancel</button></Link>
                </div>
            </form>
        </div>
    )
}