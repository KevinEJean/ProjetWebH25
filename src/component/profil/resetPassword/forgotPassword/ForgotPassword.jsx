import React from "react";
import { Link } from "react-router-dom";
import './ForgotPassword.css';

export default function ForgotPassword() {

    function handleForgotPassword() {

        // envoyé un code par email 
        let codeInput = document.getElementById('code')
        codeInput.readOnly = false;

        // if code.value = code
        location.href = 'resetPassword';
    }

    return (
        <div className="form-grid-1x2">
            <h1>EMAIL VERIFICATION</h1>
            <p className="info-text">this may take a few minutes...</p>
            <form className="form">
                <h4>Email</h4>
                <input type="text" id="email" />
                <div className="temp-cell">
                    <h4>Code</h4>
                    <input type="text" id="code" readOnly/>
                </div>
            </form>
            <div>
                <button onClick={(e) => handleForgotPassword()} style={{ color: "green", marginRight: "10px" }}>Confirm</button>
                <Link to={"/"}><button style={{ color: "red" }}>Cancel</button></Link>
            </div>
        </div>
    )
}