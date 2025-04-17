import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './SignIn.css';

export default function SignIn() { 

    /* 
    ##########################################################################################
    CONNECTION AU BACKEND EST PRET IL RESTE JUSTE A CONFIGURER LES CORS
    DÉFINTION DE CORS => https://www.propelauth.com/post/avoiding-cors-issues-in-react-next-js
    ##########################################################################################
    */



    const [show, setShow] = useState(false);
    var canSubmit = false;

    const handleSignin = (event) => {
        var currentValue = (event.target.value); // lie la valeur de chaque input
        canSubmit = submitRules(currentValue, event.target.id); // si sa retourne true => utilisateur peut submit
    }

    function submitRules(userInput, id) {

        var result = false;

        const allowedChars =
            [
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                null, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '_', '-'
            ];

        const emailChars =
            [
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                null, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '_', '-', '@', '.'
            ];

        for (let i = 0; i < userInput.length; i++) { // envoie une erreur si un charactere non-autorisé est présent
            if (id != "email" && !allowedChars.includes(userInput[i])) { 
                console.log(`'${userInput[i]}' is not allowed ! Only special characters allowed : '_' and '-'`); // ***put error message in UI
                result = false;
            } else if (id == "email" && !emailChars.includes(userInput[i])) {
                console.log(`'${userInput[i]}' is not allowed !Check the syntax of the email, it must contain : '@' and '.'`); // ***put error message in UI
                result = false;
            } else {
                result = true;
            }
        }

        return result;
    }

    function signin() {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const passwordVerif = document.getElementById("passwordVerif").value;

        if (canSubmit && password === passwordVerif) { // signin controller
            fetch("http://localhost:8080/connection/signIn", {
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