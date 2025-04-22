import React, { useState } from "react";
import { Link } from 'react-router-dom';
import submitRules from '../UseConnection';
import './LogIn.css';

export default function LogIn() {

    const [show, setShow] = useState(false);
    var canSubmit = false;

    const handleLogin = (event) => {
        var currentValue = (event.target.value); // li la valeur de chaque input
        canSubmit = submitRules(currentValue, event.target.id); // si sa retourne true => utilisateur peut submit
    }

    function login() {
        const username = document.getElementById("usernameLogin").value;
        const password = document.getElementById("passwordLogin").value;

        if (canSubmit) {
            fetch(`http://localhost:8080/connection/login/${username}/${password}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" }

            }).then((response) => {
                sessionStorage.setItem("Username", username);
                console.log(response);
            })
        } else {
            console.log("CANNOT SUBMIT, CHECK SYNTAX !");
        }
    }

    return(
        <div className="form-grid-logIn">
            <h1 style={{color: localStorage.getItem("Title-Colors")}}>LOG IN</h1>
            <form>
                <h4>Username</h4>
                <input type="text" id="usernameLogIn" onChange={handleLogin}/>
                <h4>
                    Password
                    <span onClick={(event) => setShow(s => !s)} class="material-symbols-outlined show_icon">
                        visibility
                    </span>
                </h4>
                <input type={show ? "text" : "password"} id="passwordLogin" onChange={handleLogin}/>
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