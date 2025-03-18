import React, { useState } from "react";
import './Setting.css';

export default function Setting() {

    const [color, setColor] = useState(true);
    let newColor = "lightgrey";

    function ColorPicker(thisColor) { // to be continued
        if (color == true) {
            newColor = thisColor;
        }
    }

    function Copy() {
        navigator.clipboard.writeText('filmApp@gmail.com');
        alert('Email saved !')
    }

    return(
        <div className="setting">
            <div className="theme-group">
                <h1 style={{color: color ? ColorPicker.newColor : "lightgrey"}}>Theme Preferences</h1>
                <div className="theme-grid">
                    <button onClick={(event) => ColorPicker("lightgrey")} style={{color: "lightgrey"}}>default</button>
                    <button onClick={(event) => ColorPicker("red")} style={{color: "red"}}>red</button>
                    <button onClick={(event) => ColorPicker("cornflowerblue")} style={{color: "cornflowerblue"}}>blue</button>
                    <button onClick={(event) => ColorPicker("chartreuse")} style={{color: "chartreuse"}}>green</button>
                    <button onClick={(event) => ColorPicker("yellow")} style={{color: "yellow"}}>yellow</button>
                    <button onClick={(event) => ColorPicker("orangered")} style={{color: "orangered"}}>orange</button>
                    <button onClick={(event) => ColorPicker("blueviolet")} style={{color: "blueviolet"}}>purple</button>
                    <button onClick={(event) => ColorPicker("cyan")} style={{color: "cyan"}}>cyan</button>
                    <button onClick={(event) => ColorPicker("hotpink")} style={{color: "hotpink"}}>pink</button>
                    <button onClick={(event) => ColorPicker("teal")} style={{color: "teal"}}>teal</button>
                    <button onClick={(event) => ColorPicker("chocolate")} style={{color: "chocolate"}}>brown</button>
                </div>
            </div>
            <div className="data-group">
                <h1>Data</h1>
                <div style={{display: "flex"}}>
                    <p>This will erase all your data including saved films and series (Non-Reversable)</p>
                    <button style={{marginLeft: "10px", backgroundColor: "red"}}>reset</button>
                </div>
                <div style={{display: "flex"}}>
                    <p>This will permanatly erase your account (Non-Reversable)</p>
                    <button style={{marginLeft: "10px", backgroundColor: "red"}}>delete</button>
                </div>
            </div>
            <div className="contact-group">
                <h1>Information</h1>
                <div style={{display: "flex", marginBottom: "50px"}}> 
                    <p>Contact Us ?</p>
                    <button onClick={(event) => Copy()} style={{marginLeft: "10px"}}>filmApp@gmail.com</button>
                </div>
            </div>
        </div>
    )
}