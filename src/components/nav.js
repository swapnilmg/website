import React from "react"
import logo from "../../static/logo.png"
import "./nav.css";

export default () => (
    <div className="row">
        <nav>
            <img className="logo" src={logo} alt="Logo" />
        </nav>
    </div>
)