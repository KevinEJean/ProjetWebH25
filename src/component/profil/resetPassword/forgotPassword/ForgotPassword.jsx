import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ForgotPassword.css';

export default function ForgotPassword() {

    const [userInput, setUserInput] = useState();

    function randint() {
        const min = 100000;
        const max = 999999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleCode = (e) => {
        setUserInput(e.target.value);
    }

    function handleForgotPassword() {

        const randomCode = randint();

        // envoyé randint() par email

        let codeInput = document.getElementById('code');
        if (codeInput === randomCode.toString()) {
            location.href = "/resetPassword";
        } else {
            alert("The code is incorrect !");
        }
    }

    return (
        <div className="form-grid-1x2">
            <form className="form">
                <h1 style={{ color: localStorage.getItem("Title-Colors") }}>EMAIL VERIFICATION</h1>
                <p className="info-text">this may take a few minutes...</p>
                <h4>Email</h4>
                <input type="text" id="email" />
                <div className="temp-cell">
                    <h4>Code</h4>
                    <input type="text" id="code" onChange={handleCode} />
                </div>
                <div>
                    <button onClick={(e) => handleForgotPassword()} style={{ color: "green", marginRight: "10px" }}>Confirm</button>
                    <Link to={"/"}><button style={{ color: "red" }}>Cancel</button></Link>
                </div>
            </form>
        </div>
    )
}