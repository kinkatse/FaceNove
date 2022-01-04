import React from 'react';
import { Link } from 'react-router-dom';

// Show logo and profile user with their prof pic

const NavBarLeft = ({ currentUser, color, colorSplash, updateColor }) => {
    let logo = null;
    if (color === "blue") {
        logo = window.logo_blue_url
    } else if (color === "green") {
        logo = window.logo_green_url
    } else if (color === "red") {
        logo = window.logo_red_url
    }

    return (
        <div className="navbar_left">
            <div className="logobutton">
                <Link to="/">
                    <img className="logo" src={logo} />
                </Link>
            </div>
            <button
                className={'colorbuttontext splashbutton ' + colorSplash}
                onClick={updateColor}>
                    Color
            </button>
        </div>
    )
}

export default NavBarLeft;