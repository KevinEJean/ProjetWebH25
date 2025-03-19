import React, { useState } from "react";
import { Link    } from "react-router-dom";
import './Setting.css';

export default function Setting() {

    const [color, setColor] = useState(true);
    let newColor = "lightgrey";

    function colorPicker(thisColor) { // to be continued
        if (color == true) {
            newColor = thisColor;
        }
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
                <h1 style={{color: color ? colorPicker.newColor : "lightgrey"}}>Theme Preferences</h1>
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
                    <button onClick={(event) => dataReset()} style={{marginLeft: "10px", backgroundColor: "red"}}>Reset</button>
                </div>
                <div style={{display: "flex"}}>
                    <p>This will permanatly erase your account (Non-Reversable)</p>
                    <Link to="/userDelete"><button style={{marginLeft: "10px", backgroundColor: "red"}}>Delete</button></Link>
                </div>
            </div>
            <div className="contact-group">
                <h1>Information</h1>
                <div style={{display: "flex", marginBottom: "50px"}}>
                    <p>Contact Us ?</p>
                    <button onClick={(event) => copy()} style={{marginLeft: "10px"}}>filmApp@gmail.com</button>
                </div>
            </div>
        </div>
    )
}