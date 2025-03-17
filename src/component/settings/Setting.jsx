import React from "react";
import { Link } from "react-router-dom";
import './Setting.css';

export default function Setting() {

    return(
        <div className="setting">
            <div className="theme-group">
                <h1>Theme Preferences</h1>
            </div>
            <div className="data-group">
                <h1>Data</h1>
            </div>
            <div className="contact-group">
                <h1>Contact Us</h1>
            </div>
        </div>
    )
}