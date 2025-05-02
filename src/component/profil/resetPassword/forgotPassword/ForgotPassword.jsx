import React from "react";
import { Link } from "react-router-dom";
import './ForgotPassword.css';

export default function ForgotPassword() {

    function handleForgotPassword() {

        // envoyé un code par email 
        // si codeInput.value === randint();
        // then location.href = 'resetPassword'
        // let codeInput = document.getElementById('code');
        // codeInput.readOnly = false;
    }

    return (
        <div className="form-grid-1x2">
            <h1 style={{ color: localStorage.getItem("Title-Colors") }}>EMAIL VERIFICATION</h1>
            <p className="info-text">this may take a few minutes...</p>
            <form className="form">
                <h4>Email</h4>
                <input type="text" id="email" />
                <div className="temp-cell">
                    <h4>Code</h4>
                    <input type="text" id="code" readOnly />
                </div>
                <div>
                    <button onClick={(e) => handleForgotPassword()} style={{ color: "green", marginRight: "10px" }}>Confirm</button>
                    <Link to={"/"}><button style={{ color: "red" }}>Cancel</button></Link>
                </div>
            </form>
        </div>
    )
}