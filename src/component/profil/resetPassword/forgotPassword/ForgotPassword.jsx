import React, { useState } from "react";
import { Link } from "react-router-dom";
// import sgMail from "@sendgrid/mail";
import './ForgotPassword.css';

export default function ForgotPassword() {

    // const gmail = "2GXTU13FPN9HX1A396AYZDF6";
    // const gmailTokem = "9435c1ca13d0a2615926a767151d0b07";
    // const gmailKey = "ACa19865197f8427f09d5aabb2bc7c73cc";
    // const SENDGRID_API_KEY = "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";
    const [show, setShow] = useState();
    const [userInput, setUserInput] = useState();

    function randint() {
        const min = 100000;
        const max = 999999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleCode = (e) => {
        setUserInput(e.target.value);
    }

    const handleForgotPassword = (e) => {

        // e.preventDefault();
        // const randomCode = randint();
        // var email = document.getElementById("email");

        // if (!show) {
        //     setShow(true);
        //     e.target.textContent = "Confirm";

        //     // envoyé randomCode par email
        //     sgMail.setApiKey(SENDGRID_API_KEY)
        //     const msg = {
        //         to: email.value,
        //         from: 'filmapph25@gmail.com',
        //         subject: 'Verification code to reset your password!',
        //         text: 'If you did not request to reset your password, you may have been hacked...',
        //         html: `If you did, here's the code: <strong>${randomCode}</strong>`
        //     }
        //     sgMail
        //         .send(msg)
        //         .then(() => {
        //             console.log('Email sent!')
        //         })
        //         .catch((error) => {
        //             console.error(error)
        //         })
        // } else {
        //     let codeInput = document.getElementById('code');
        //     if (codeInput === randomCode.toString()) {
        //         location.href = "/resetPassword";
        //     } else {
        //         alert("The code is incorrect !");
        //     }
        // }
    }

    return (
        <div className="form-grid-1x2">
            <form className="form">
                <h1 style={{ color: localStorage.getItem("Title-Colors") }}>EMAIL VERIFICATION</h1>
                <p className="info-text">this may take a few minutes...</p>
                <h4>Email</h4>
                <input type="text" id="email" />
                <div className="temp-cell" style={{ display: show ? "initial" : "none" }}>
                    <h4>Code</h4>
                    <input type="text" id="code" onChange={handleCode} />
                </div>
                <div>
                    <button onClick={handleForgotPassword} style={{ color: "green", marginRight: "10px" }}>Send Code</button>
                    <Link to={"/"}><button style={{ color: "red" }}>Cancel</button></Link>
                </div>
            </form>
        </div>
    )
}