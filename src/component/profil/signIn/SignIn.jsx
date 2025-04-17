import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './SignIn.css';

export default function SignIn() {

    const [show, setShow] = useState();
    const [title, setTitle] = useState("SIGN IN");
    const [notAllowed, setNotAllowed] = useState();

    const handleSignin = (event) => {
        var currentValue = (event.target.value);
        submitRules(currentValue, event.target.id);
    }

    function submitRules(userInput, id) {
        const allowedChars = 
        [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
            null, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '_', '-'
        ];

        for (let i = 0; i < userInput.length; i++) {
            if (!allowedChars.includes(userInput[i])) {
                setNotAllowed(true);
            } else {
                setTitle("SIGN IN");
            }
        }

        if (notAllowed) {
            setTitle(`${id} cannot contain ${userInput[i]}`);
        }
    }

    return (
        <div className="form-grid-signIn">
            <h1 style={{ color: localStorage.getItem("Title-Colors") }}>{title}</h1>
            <form>
                <h4>Username</h4>
                <input type="text" id="username" placeholder="playerOne" onChange={handleSignin}/>
                <p className="info-text">cannot be changed later</p>
                <h4>
                    Password
                    <span onClick={(event) => setShow(s => !s)} class="material-symbols-outlined show_icon">
                        visibility
                    </span>
                </h4>
                <input type={show ? "text" : "password"} id="password" onChange={handleSignin}/>
                <p className="info-text">5-16 charachters & no special charachters</p>
            </form>
            <form>
                <h4>Email</h4>
                <input type="text" id="email" onChange={handleSignin}/>
                <p className="info-text">exemple : test@gmail.com</p>
                <h4>Confirm Password</h4>
                <input type={show ? "text" : "password"} id="passwordVerif" onChange={handleSignin}/>
            </form>
            <Link to={"/logIn"}><p style={{ textAlign: "left" }}>Already have an account?</p></Link>
            <div>
                <button style={{ color: "green", marginRight: "10px" }}>Sign In</button>
                <Link to={"/"}><button style={{ color: "red" }}>Cancel</button></Link>
            </div>
        </div>
    )
}