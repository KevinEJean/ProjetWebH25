import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

    function copy() {
        navigator.clipboard.writeText('filmApp@gmail.com');
        alert('Email saved !')
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
                <h1>Theme Preferences</h1>
                <div className="theme-grid">
                    <button onClick={(event) => colorPicker("lightgrey")} style={{ color: "lightgrey" }}>default</button>
                    <button onClick={(event) => colorPicker("red")} style={{ color: "red" }}>red</button>
                    <button onClick={(event) => colorPicker("cornflowerblue")} style={{ color: "cornflowerblue" }}>blue</button>
                    <button onClick={(event) => colorPicker("chartreuse")} style={{ color: "chartreuse" }}>green</button>
                    <button onClick={(event) => colorPicker("yellow")} style={{ color: "yellow" }}>yellow</button>
                    <button onClick={(event) => colorPicker("orangered")} style={{ color: "orangered" }}>orange</button>
                    <button onClick={(event) => colorPicker("blueviolet")} style={{ color: "blueviolet" }}>purple</button>
                    <button onClick={(event) => colorPicker("cyan")} style={{ color: "cyan" }}>cyan</button>
                    <button onClick={(event) => colorPicker("hotpink")} style={{ color: "hotpink" }}>pink</button>
                    <button onClick={(event) => colorPicker("teal")} style={{ color: "teal" }}>teal</button>
                    <button onClick={(event) => colorPicker("chocolate")} style={{ color: "chocolate" }}>brown</button>
                </div>
            </div>
            <div className="data-group">
                <h1>Data</h1>
                <div style={{ display: "flex" }}>
                    <p>This will erase all your data including saved films and series (Non-Reversable)</p>
                    <button onClick={(event) => dataReset()} style={{ marginLeft: "10px", color: "red" }}>Reset</button>
                </div>
                <div style={{ display: "flex" }}>
                    <p>This will permanatly erase your account (Non-Reversable)</p>
                    <button onClick={() => handleRedirectionDeleteAccount()} style={{ marginLeft: "10px", color: "red" }}>Delete</button>
                </div>
            </div>
            <div className="contact-group">
                <h1>Information</h1>
                <div style={{ display: "flex", marginBottom: "50px" }}>
                    <p>Contact Us ?</p>
                    <button onClick={(event) => copy()} style={{ marginLeft: "10px", color: "lightgrey" }}>filmapp25@gmail.com</button>
                </div>
            </div>
        </div>
    )
}