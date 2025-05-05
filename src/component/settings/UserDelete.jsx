import React, { useState } from "react";
import { Link } from "react-router-dom";
import submitRules, { handleLogOut } from "../profil/UseConnection";
import axios from "axios";
import "./UserDelete.css";

export default function UserDelete() {

    const username = sessionStorage.getItem("username");
    if (username === null) {
        alert('You need to be logged in !');
        location.href = "/setting"
    }

    const [show, setShow] = useState();
    const [user, setUser] = useState({ username: username, password: "" });

    const handlePassword = (e) => {
        setUser({ ...user, password: document.getElementById("passwd").value });
    }

    const deleteUser = async () => {
        if (submitRules(username, "@.", user.password)) {
            user.username.trim();
            user.password.trim();
            try {
                axios.put(`http://localhost:8080/client/remove/${username}/${user.password}`)
                    .then(() => {
                        handleLogOut();
                    })
                    .catch(() => {
                        alert("Incorrect password!");
                    })
            } catch (error) {
                alert("Server is experiencing difficulties, please try again later.");
                console.error();
            }
        } else {
            alert("Credentials cannot contain special characters or spaces. Also the password must be 5 to 16 characters long.");
        }
    }

    return (
        <div className="user-delete-grid">
            <h1>Are you sure ?</h1>
            <p className="critical-info">This will permanatly delete your account !</p>
            <form>
                <h4>Username</h4>
                <input type="text" id="username" value={username} readOnly />
                <h4>
                    Password
                    <span onClick={() => setShow(s => !s)} class="material-symbols-outlined show_icon">
                        visibility
                    </span>
                </h4>
                <input type={show ? "text" : "password"} id="passwd" onChange={handlePassword} />
            </form>
            <div>
                <button name="confirmBtn" onClick={deleteUser}>Delete</button>
                <Link to={"/setting"}><button style={{ color: "red", margin: "10px 0 0 10px" }}>Cancel</button></Link>
            </div>
        </div>
    )
}