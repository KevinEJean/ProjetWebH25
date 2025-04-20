import React from "react";
import { Link } from "react-router-dom";
import { handleLogOut } from "../utils/useUtils";
import "./Profil.css";

export default function Profil() {

    // npm install --save-dev express cors
    /* DISABLES CORS */

    function isLoggedIn() {
        if(localStorage.getItem("isLoggedIn")) {
            fetch(`http://localhost:8080/client/getById/${localStorage.getItem("userID")}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then((response) => {
                // afficher dans les inputs
            })
        } else {
            window.location.href = "/logIn";
        }
    }

    function addAvatar() {
        // change picture
    }

    function allowUpdate() {
        // change this.button to 'save' button
        // then onClick (this.button) revert to update.button
        // then getMapping (refresh page)
    }

    return (
        <div className="form-grid">
            <h1 style={{color: localStorage.getItem("Title-Colors")}}>PROFIL</h1>
            <span className="material-symbols-outlined avatar">
                account_circle
            </span>
            <form>
                <h4>First Name</h4>
                <input type="text" id="fname" readOnly />
                <h4>Email</h4>
                <input type="text" id="email" readOnly />
                <h4>Password</h4>
                <input type="password" id="passwd" readOnly />
            </form>
            <form>
                <h4>Last Name</h4>
                <input type="text" id="lname" readOnly />
                <h4>Username</h4>
                <input type="text" id="username" readOnly />
                <div style={{ margin: " 20px 0 0 20px" }}>
                    <button className="yesBTN" onClick={(event) => allowUpdate()} style={{ color: "green", marginRight: "10px", }}>Update</button>
                    <Link to={"/"}><button style={{ color: "red" }}>Cancel</button></Link>
                </div>
            </form>
            <p onClick={(event) => addAvatar()}>change picture?</p>
            <p onClick={(event) => handleLogOut()} style={{ textAlign: "left" }}>log out</p>
        </div>
    )
}