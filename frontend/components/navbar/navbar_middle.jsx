import React from 'react';
import { Link } from 'react-router-dom';
import { logoImage } from '../../util/color_util';

// Show search bar eventually, but for now show greeting for user

const NavBarMiddle = ({ firstName, lastName}) => {
    return (
        <div className="navbar_middle">
            {/* <div className="greeting">
                Welcome, {`${firstName} ${lastName}`}
            </div> */}
            <div className="logo">
                <Link to="/">
                    <img src={logoImage()} />
                </Link>
            </div>
            {/* <div className="logo">
                // FOR USERS INDEX
                <a to="/">
                <img src={logoImage()} />
                </a>
            </div> */}
            <div className="logo">
                <a to="https://github.com/kinkatse">
                    <img src={logoImage()} />
                </a>
            </div>
            <div className="logo">
                <a to="https://www.linkedin.com/in/kin-ka-tse/">
                    <img src={logoImage()} />
                </a>
            </div>
        </div>
    )
}

export default NavBarMiddle;