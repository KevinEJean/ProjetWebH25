import React, { useState } from "react";
import { Link } from "react-router-dom";
import handleLogOut from "../profil/Profil";
import "./UserDelete.css";

export default function UserDelete() {

    const [show, setShow] = useState();

    function deleteUser() {
        // api (/client/remove)
        handleLogOut();
        location.href = "/";
    }

    return (
        <div className="user-delete-grid">
            <h1>Are you sure ?</h1>
            <p className="critical-info">This will permanatly delete your account !</p>
            <form>
                <h4>Username</h4>
                <input type="text" id="username" readOnly /> {/* ajouter username automatiquement */}
                <h4>
                    Password
                    <span onClick={(event) => setShow(s => !s)} class="material-symbols-outlined show_icon">
                        visibility
                    </span>
                </h4>
                <input type={show ? "text" : "password"} id="passwd" />
            </form>
            <div>
                <button onClick={(event) => deleteUser()}>Delete</button>
                <Link to={"/"}><button style={{ color: "red", margin: "10px 0 0 10px"}}>Cancel</button></Link>
            </div>
        </div>
    )
}