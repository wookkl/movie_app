import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"
function Navigation(){
    return <div className="nav">
        <Link className ="nav__link" to="/">Home</Link>
        <Link className ="nav__link" to="/about">About</Link>
    </div>
}

export default Navigation;