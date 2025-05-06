import React from "react";
import { handleLogOut } from "./UseConnection";
import "./Profil.css";
import axios from "axios"; 
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Profil() {
    const [user, setUser] = useState({ password: "", email: "", fname: "", lname: "" });
    const username = sessionStorage.getItem("username");
    const [show, setShow] = useState();
    const [tempBugFix, setTempBugFix] = useState(true);


    function showUserInfo() {
        if (sessionStorage.getItem("onlineStatus") == "true" && tempBugFix === true) {
            setTempBugFix(false);
            async function getUserInfo() {
                try {
                    const response = await axios.get(`http://localhost:8080/client/getById/${sessionStorage.getItem("id")}`);
                    setUser({ password: response.data.password, email: response.data.email });
                    
                    if (response.data.fname != null) {
                        setUser({ fname: response.data.fname });
                    }

                    if (response.data.lname != null) {
                        setUser({ lname: response.data.lname });
                    }
                } catch (error) {
                    console.error();
                }
            }
            getUserInfo();
        } else {
            window.location = "/logIn";
        }
    }

    if (tempBugFix) {
        showUserInfo();
    }

    return (
        <div className="form-grid">
            <h1 style={{ color: localStorage.getItem("Title-Colors") }}>PROFIL</h1>
            <span className="material-symbols-outlined avatar">
                account_circle
            </span>

            <form>
                <h4>First Name</h4>
                <input type="text" id="fname" value={user.fname} readOnly />
                <h4>Email</h4>
                <input type="text" id="email" value={user.email} readOnly />
                <h4>
                    Password
                    <span onClick={() => setShow(s => !s)} class="material-symbols-outlined show_icon">
                        visibility
                    </span>
                </h4>
                <input type={show ? "text" : "password"} id="password" value={user.password} readOnly />
            </form>
            <form>
                <h4>Last Name</h4>
                <input type="text" id="lname" value={user.lname} readOnly />
                <h4>Username</h4>
                <input type="text" id="username" value={username} readOnly />
            </form>
            <p>change picture?</p>
            <p id="logout" onClick={() => handleLogOut()} style={{ textAlign: "left" }}>log out</p>
            <Link to={"/resetPassword"}><p className="info" style={{ textAlign: "right" }}>reset password?</p></Link>

        </div>
    )
}