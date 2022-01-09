import React from 'react';
import { Link } from 'react-router-dom';

// Show about links and log out

const NavBarRight = ({ logout, colorSplash, updateColor }) => {
    return (
        <div className="navbar_right">
            <img
                className="color_button"
                onClick={updateColor}
                src={window.color_url}
            />
            <button
                className={'logoutbuttontext splashbutton ' + colorSplash}
                onClick={logout}>
                    Log Out!
            </button>
        </div>
    )
}

export default NavBarRight;