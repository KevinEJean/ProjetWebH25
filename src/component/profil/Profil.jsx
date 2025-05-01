import React from "react";
import { Link } from "react-router-dom";
import { handleLogOut, isLoggedIn } from "./UseConnection";
import "./Profil.css";
import axios from "axios"; // besoin pour allowUpdate
import { useState } from "react";

export default function Profil() {

    const [user, setUser] = useState({ username: "", password: "", email: "", fname: "", lname: "" });

    isLoggedIn(user);

    function addAvatar() {
        // change picture
    }

    function allowUpdate() {
        // change update.button to save.button && change readOnly = false (with useState)
            // "are you sure?" screen
                // no  => refresh page
                // yes => onClick axios.put("http://locahost:8080/client/update", user)
                    // then revert button to update.button
        // sleep(10 minutes) attendre avant de changé encore
        // refresh page
    }
    

    return (
        <div className="form-grid">
            <h1 style={{color: localStorage.getItem("Title-Colors")}}>PROFIL</h1>
            <span className="material-symbols-outlined avatar">
                account_circle
            </span>
            <form>
                <h4>First Name</h4>
                <input type="text" id="Fname" value={user.fname} readOnly />
                <h4>Email</h4>
                <input type="text" id="Email" value={user.email} readOnly />
                <h4>Password</h4>
                <input type="password" id="Password" value={user.password} readOnly />
            </form>
            <form>
                <h4>Last Name</h4>
                <input type="text" id="Lname" value={user.lname} readOnly />
                <h4>Username</h4>
                <input type="text" id="username" value={sessionStorage.getItem("username")} readOnly />
                <div style={{ margin: " 20px 0 0 20px" }}>
                    <button className="yesBTN" onClick={(event) => allowUpdate()} style={{ color: "green", marginRight: "10px", }}>Update</button>
                    <Link to={"/"}><button style={{ color: "red" }}>Cancel</button></Link>
                </div>
            </form>
            <p onClick={(event) => addAvatar()}>change picture?</p>
            <p onClick={() => handleLogOut()} style={{ textAlign: "left" }}>log out</p>
        </div>
    )
}