import React from 'react';
import { Link } from 'gatsby';
import * as PropTypes from 'prop-types';
import style from './header.module.css';
import ThemeButton from './button';
import NavBar from "./navBar";

const Header = ({ siteTitle, siteDescription }) => {
    return (
        <header className={style.header}>
            <div className={style.div}>
                <h1 className={style.h1}>
                    <Link to="/" className={style.Link}>
                        {siteTitle}
                    </Link>
                </h1>
                <br />
                <i>{siteDescription}</i>
                <ThemeButton />
                <NavBar/>
            </div>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
    siteDescription: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
    siteDescription: ``,
};

export default Header;
