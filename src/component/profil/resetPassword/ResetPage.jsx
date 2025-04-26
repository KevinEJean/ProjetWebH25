import React, { useState } from "react";
import { Link } from "react-router-dom";
import handleLogOut from "../Profil";
import './ResetPage.css';

export default function ResetPassword() {

    const [show, setShow] = useState();

    function passwordReset() {
        // if passwd.value.contains = special chars
            // alert("Password can only contain 18 letters including numbers")
        // else
            // fetch updatePassword
            // then handleLogOut()
    }

    return (
        <div className="form-grid-1x2">
            <h1 style={{color: localStorage.getItem("Title-Colors")}}>PASSWORD RESET</h1>
            <p className="alt-info">Cannot contain any special characters and must be between 5 - 16 letters or numbers</p>
            <form className="form">
                <h4>
                    Password
                    <span onClick={(event) => setShow(s => !s)} class="material-symbols-outlined show_icon">
                        visibility
                    </span>
                </h4>
                <input type={show ? "text" : "password"} id="passwd"/>
                <h4>Confirm Password</h4>
                <input type={show ? "text" : "password"} id="passwd"/>
            </form>
            <div>
                <button onClick={(event) => passwordReset()} style={{ color: "green", marginRight: "10px" }}>Confirm</button>
                <Link to={"/"}><button style={{ color: "red" }}>Cancel</button></Link>
            </div>
        </div>
    )
}