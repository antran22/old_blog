import React from "react";
import { Link } from "gatsby";
import style from "./nav.module.css"

const NavBar = () => {
    return (
        <div className={style.navBar}>
            <Link to="/">Home</Link>
            {' • '}
            <Link to="/about">About me</Link>
            {' • '}
            <Link to="/series">My series</Link>
        </div>
    );
};

export default NavBar;
