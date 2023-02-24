import React from 'react';
import { Link } from 'react-router-dom';

import { colorWheelImage, logoutImage, profPicColor } from '../../util/color_util';

// Show about links and log out

const NavBarRight = ({ currentUser, logout, updateColor }) => {
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
            <div className={`navprofpic ${profPicColor()}`}>
                <Link to={`/user/${currentUser.id}`}>
                    <img src={currentUser.profilePicUrl}/>
                </Link>
            </div>
        </div>
    )
}

export default NavBarRight;