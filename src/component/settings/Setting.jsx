import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { troubleShoot } from "../utils/useUtils";
import './Setting.css';

export default function Setting() {
    const navigate = useNavigate()
    troubleShoot();

    function colorPicker(thisColor) {
        if (thisColor == null) {
            thisColor = localStorage.getItem("Title-Colors");
        }
        localStorage.setItem("Title-Colors", thisColor);
        var allH1Titles = document.getElementsByTagName("h1");
        for (let i = 0; i < allH1Titles.length; i++) {
            allH1Titles[i].style.color = localStorage.getItem("Title-Colors");
        }
    }

    const copy = (e) => {
        navigator.clipboard.writeText(e.target.name);
        alert(`${e.target.textContent} saved !`);
    }

    function dataReset() {
        localStorage.clear();
        localStorage.setItem("Title-Colors", "lightgrey");
        alert('Data succesfully erased !')
        window.location.reload();
    }

    function handleRedirectionDeleteAccount() {
        if (sessionStorage.getItem("onlineStatus") ==  "true") {
            navigate("/userDelete")
        } else{
            alert("you must login/signup first")
        }
    }

    return (
        <div className="setting">
            <div className="theme-group">
                <h1 name="theme-title">Theme Preferences</h1>
                <div className="theme-grid">
                    <button name="default" onClick={() => colorPicker("lightgrey")} style={{ color: "lightgrey" }}>default</button>
                    <button name="red" onClick={() => colorPicker("red")} style={{ color: "red" }}>red</button>
                    <button name="blue" onClick={() => colorPicker("cornflowerblue")} style={{ color: "cornflowerblue" }}>blue</button>
                    <button name="green" onClick={() => colorPicker("chartreuse")} style={{ color: "chartreuse" }}>green</button>
                    <button name="yellow" onClick={() => colorPicker("yellow")} style={{ color: "yellow" }}>yellow</button>
                    <button name="orange" onClick={() => colorPicker("orangered")} style={{ color: "orangered" }}>orange</button>
                    <button name="purple" onClick={() => colorPicker("blueviolet")} style={{ color: "blueviolet" }}>purple</button>
                    <button name="cyan" onClick={() => colorPicker("cyan")} style={{ color: "cyan" }}>cyan</button>
                    <button name="pink" onClick={() => colorPicker("hotpink")} style={{ color: "hotpink" }}>pink</button>
                    <button name="teal" onClick={() => colorPicker("teal")} style={{ color: "teal" }}>teal</button>
                    <button name="brown" onClick={() => colorPicker("chocolate")} style={{ color: "chocolate" }}>brown</button>
                </div>
            </div>
            <div className="data-group">
                <h1>Data</h1>
                <div style={{ display: "flex" }}>
                    <p>This will erase all your data including saved films and series (Non-Reversable)</p>
                    <button onClick={() => dataReset()} style={{ marginLeft: "10px", color: "red" }}>Reset</button>
                </div>
                <div style={{ display: "flex" }}>
                    <p>This will permanatly erase your account (Non-Reversable)</p>
                    <button name="deleteBtn" onClick={() => handleRedirectionDeleteAccount()} style={{ marginLeft: "10px", color: "red" }}>Delete</button>
                </div>
            </div>
            <div className="contact-group">
                <h1>Information</h1>
                <div style={{ display: "flex", marginBottom: "50px" }}>
                    <p>Contact Us ?</p>
                    <button name="filmapph25@gmail.com" onClick={copy} style={{ marginLeft: "10px", color: "lightgrey" }}>Email</button>
                    <button name="https://github.com/KevinEJean/ProjetWebH25" onClick={copy} style={{ marginLeft: "10px", color: "lightgrey" }}>Github</button>
                </div>
            </div>
        </div>
    )
}