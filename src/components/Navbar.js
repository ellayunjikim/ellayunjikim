import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className = "header">
                <Link to='/'>
                    <h1> <p className = "title">Ella Kim.</p> </h1>
                </Link>
                <ul className = "navmenu">
                    <li style= {{ width: "100%" }}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li style= {{ width: "100%" }}>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li style= {{ width: "100%" }}>
                        <Link to='/about'>About</Link>
                    </li>
                    <li style= {{ width: "100%" }}>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
        </div>
    );
};

export default Navbar;
