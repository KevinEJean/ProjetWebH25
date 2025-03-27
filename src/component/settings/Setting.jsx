import React, { useState } from "react";
import { Link } from "react-router-dom";
// import $ from jquery;
import './Setting.css';

export default function Setting() {

    function colorPicker(thisColor) { // to be continued
        var allH1Titles = document.getElementsByTagName("h1");
        // var allH2Titles = ;
        // var allH3Titles = ;

        for (let i = 0; i < allH1Titles.length; i++) {
            allH1Titles[i].style.color == thisColor;
        }

        // for (let i = 0; i < allH2Titles.length; i++) {
        //     allH2Titles[i].style.color == thisColor;
        //     console.log("H2 : " + allH2Titles[i].textContent);
        // }

        // for (let i = 0; i < allH3Titles.length; i++) {
        //     allH3Titles[i].style.color == thisColor;
        //     console.log("H3 : " + allH3Titles[i].textContent);
        // }
    }

    function copy() {
        navigator.clipboard.writeText('filmApp@gmail.com');
        alert('Email saved !')
    }

    function dataReset() {
        localStorage.clear();
        alert('Data succesfully erased !')
    }

    return(
        <div className="setting">
            <div className="theme-group">
                <h1>Theme Preferences</h1>
                <div className="theme-grid">
                    <button onClick={(event) => colorPicker("lightgrey")} style={{color: "lightgrey"}}>default</button>
                    <button onClick={(event) => colorPicker("red")} style={{color: "red"}}>red</button>
                    <button onClick={(event) => colorPicker("cornflowerblue")} style={{color: "cornflowerblue"}}>blue</button>
                    <button onClick={(event) => colorPicker("chartreuse")} style={{color: "chartreuse"}}>green</button>
                    <button onClick={(event) => colorPicker("yellow")} style={{color: "yellow"}}>yellow</button>
                    <button onClick={(event) => colorPicker("orangered")} style={{color: "orangered"}}>orange</button>
                    <button onClick={(event) => colorPicker("blueviolet")} style={{color: "blueviolet"}}>purple</button>
                    <button onClick={(event) => colorPicker("cyan")} style={{color: "cyan"}}>cyan</button>
                    <button onClick={(event) => colorPicker("hotpink")} style={{color: "hotpink"}}>pink</button>
                    <button onClick={(event) => colorPicker("teal")} style={{color: "teal"}}>teal</button>
                    <button onClick={(event) => colorPicker("chocolate")} style={{color: "chocolate"}}>brown</button>
                </div>
            </div>
            <div className="data-group">
                <h1>Data</h1>
                <div style={{display: "flex"}}>
                    <p>This will erase all your data including saved films and series (Non-Reversable)</p>
                    <button onClick={(event) => dataReset()} style={{marginLeft: "10px", color: "red"}}>Reset</button>
                </div>
                <div style={{display: "flex"}}>
                    <p>This will permanatly erase your account (Non-Reversable)</p>
                    <Link to="/userDelete"><button style={{marginLeft: "10px", color: "red"}}>Delete</button></Link>
                </div>
            </div>
            <div className="contact-group">
                <h1>Information</h1>
                <div style={{display: "flex", marginBottom: "50px"}}>
                    <p>Contact Us ?</p>
                    <button onClick={(event) => copy()} style={{marginLeft: "10px", color: "lightgrey"}}>filmApp@gmail.com</button>
                </div>
            </div>
        </div>
    )
}