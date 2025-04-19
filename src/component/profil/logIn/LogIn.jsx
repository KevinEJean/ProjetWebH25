import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './LogIn.css';

export default function LogIn() {

    const [show, setShow] = useState();

    // import canSubmit function from signIn.jsx and handleSign
    // make a useUtil for the entire profil folder

    // function login() {
    //     const username = document.getElementById("usernameLogin").value;
    //     const password = document.getElementById("passwordLogin").value;

    //     if (canSubmit) { // login controller
    //         fetch(`http://localhost:8080/connection/login/${username}/${password}`, {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" }

    //         }).then(() => {
    //             // setUserIsLoggedIn(true); <= auth (access to profil.jsx, NBA,jsx, FIFA.jsx)
    //             console.log("User succesfully logged in");
    //         })
    //     } else {
    //         console.log("CANNOT SUBMIT, CHECK SYNTAX !");
    //     }
    // }

    return(
        <div className="form-grid-logIn">
            <h1 style={{color: localStorage.getItem("Title-Colors")}}>LOG IN</h1>
            <form>
                <h4>Username</h4>
                <input type="text" id="usernameLogIn"/>
                <h4>
                    Password
                    <span onClick={(event) => setShow(s => !s)} class="material-symbols-outlined show_icon">
                        visibility
                    </span>
                </h4>
                <input type={show ? "text" : "password"} id="passwordLogin"/>
                <Link to={"/forgotPassword"}><p className="info" style={{textAlign: "right"}}>reset password?</p></Link>
            </form>
            <Link to={"/signIn"}><p>Don't have an account?</p></Link>
            <div>
                <button onClick={(e) => login()} style={{color: "green", marginRight: "10px"}}>Log In</button>
                <Link to={"/"}><button style={{color: "red"}}>Cancel</button></Link>
            </div>
        </div>
    )
}