import React from "react";
import { Link } from "react-router-dom";
import submitRules, { handleLogOut } from "./UseConnection";
import "./Profil.css";
import axios from "axios"; // besoin pour allowUpdate
import { useState } from "react";

export default function Profil() {

    const [user, setUser] = useState({ password: "", email: "", fname: "", lname: "" });
    const username = sessionStorage.getItem("username");
    const [canUpdate, setCanUpdate] = useState(true);
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

    function addAvatar() {
        // change picture
    }

    const allowUpdate = async (e) => {
        // e.preventDefault();

        // const thisBTN = document.getElementById("yesBTN");

        // const handleUpdate = (e) => {
        //     setUser({ ...user, [e.target.id]: e.target.value });
        // }

        // document.getElementById("fname").readOnly = false;
        // document.getElementById("lname").readOnly = false;

        // document.getElementById("fname").onchange = handleUpdate;
        // document.getElementById("lname").onchange = handleUpdate;

        // alert("You can only update your first name and last name from this screen. To change password you need to click on 'logout' then click 'reset password'.");

        // if (thisBTN.textContent == "Save") {
        //     // if (submitRules(user.fname, user.email, user.lname)) {
        //     // user.fname.trim();
        //     // user.lname.trim();
        //     try {
        //         const response = await axios.put(`http://localhost:8080/client/update/${username}/${user.email}/${user.fname}/${user.lname}`);
        //         if (response.data) {
        //         } else {
        //             alert("Incorrect login credentials, please try again.");
        //         }
        //     } catch (error) {
        //         alert("Server is experiencing difficulties, please try again later.");
        //         console.error(error);
        //     }
        //     /*} else {
        //         alert("Credentials cannot contain special characters or spaces !");
        //     }*/
        //     thisBTN.textContent = "Update";
        // } else {
        //     thisBTN.textContent = "Save";
        // }
    }

    if (tempBugFix) { // empêche que la requete soit exécuter a l'infinie
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
                    <span onClick={(event) => setShow(s => !s)} class="material-symbols-outlined show_icon">
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
                <div style={{ margin: " 20px 0 0 20px" }}>
                    <button id="yesBTN" className="yesBTN" onClick={allowUpdate} style={{ color: "green", marginRight: "10px", }}>Update</button>
                    <Link to={"/"}><button style={{ color: "red" }}>Cancel</button></Link>
                </div>
            </form>
            <p onClick={(event) => addAvatar()}>change picture?</p>
            <p onClick={(e) => handleLogOut()} style={{ textAlign: "left" }}>log out</p>
        </div>
    )
}