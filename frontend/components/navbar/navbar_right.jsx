import React from 'react';
import { Link } from 'react-router-dom';

// Show about links and log out

const NavBarRight = ({ logout, colorSplash }) => {
    return (
        <div className="navbar_right">
            <button
                className={'logoutbuttontext splashbutton ' + colorSplash}
                onClick={logout}>
                    Log Out!
            </button>
        </div>
    )
}

export default NavBarRight;