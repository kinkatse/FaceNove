import React from 'react';
import { Link } from 'react-router-dom';

import { colorWheelImage, logoutImage } from '../../util/color_util';

// Show about links and log out

const NavBarRight = ({ logout, updateColor }) => {
    return (
        <div className="navbar_right">
            <img
                className="color_button"
                onClick={updateColor}
                src={colorWheelImage()}
            />
            <img
                className="logout_button"
                onClick={logout}
                src={logoutImage()}
            />
        </div>
    )
}

export default NavBarRight;