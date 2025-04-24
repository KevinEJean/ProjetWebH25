import React, { useState } from "react";
import { Link } from 'react-router-dom';
import submitRules from '../UseConnection';
import './SignIn.css';

export default function SignIn() { 

    const [show, setShow] = useState(false);
    var canSubmit = false;

    const handleSignin = (event) => {
        var currentValue = (event.target.value); // lie la valeur de chaque input
        canSubmit = submitRules(currentValue, event.target.id); // si sa retourne true => utilisateur peut submit
    }

    function signin() {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const passwordVerif = document.getElementById("passwordVerif").value;

        if (canSubmit && password === passwordVerif) {
            fetch("http://localhost:8080/connection/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(email, username, password)

            }).then((response) => {
                console.log(response);
            })
        } else {
            console.log("CANNOT SUBMIT, CHECK SYNTAX !");
        }
    }

    return (
        <div className="form-grid-signIn">
            <h1 style={{ color: localStorage.getItem("Title-Colors") }}>SIGN IN</h1>
            <form>
                <h4>Username</h4>
                <input type="text" id="username" placeholder="playerOne" onChange={handleSignin} />
                <p className="info-text">cannot be changed later</p>
                <h4>
                    Password
                    <span onClick={(event) => setShow(s => !s)} class="material-symbols-outlined show_icon">
                        visibility
                    </span>
                </h4>
                <input type={show ? "text" : "password"} id="password" onChange={handleSignin} />
                <p className="info-text">5-16 charachters & no special charachters</p>
            </form>
            <form>
                <h4>Email</h4>
                <input type="text" id="email" onChange={handleSignin} />
                <p className="info-text">exemple : test@gmail.com</p>
                <h4>Confirm Password</h4>
                <input type={show ? "text" : "password"} id="passwordVerif" onChange={handleSignin} />
            </form>
            <Link to={"/logIn"}><p style={{ textAlign: "left" }}>Already have an account?</p></Link>
            <div>
                <button style={{ color: "green", marginRight: "10px" }} onClick={(event) => signin()}>Sign In</button>
                <Link to={"/"}><button style={{ color: "red" }}>Cancel</button></Link>
            </div>
        </div>
    )
}