import React from 'react';
import { Link } from 'react-router-dom';

// Show about links and log out

const NavBarRight = ({ logout, color, updateColor }) => {
    let colorButtonColor;
    let logoutButtonColor;
    if (color === "blue") {
        colorButtonColor = window.color_blue_url
        logoutButtonColor = window.logout_blue_url
    } else if (color === "green") {
        colorButtonColor = window.color_green_url
        logoutButtonColor = window.logout_green_url
    } else if (color === "red") {
        colorButtonColor = window.color_red_url
        logoutButtonColor = window.logout_red_url
    }

    return (
        <div className="navbar_right">
            <img
                className="color_button"
                onClick={updateColor}
                src={colorButtonColor}
            />
            <img
                className="logout_button"
                onClick={logout}
                src={logoutButtonColor}
            />

            {/* <button
                className={'logoutbuttontext splashbutton ' + colorSplash}
                onClick={logout}>
                    Log Out!
            </button> */}
        </div>
    )
}

export default NavBarRight;