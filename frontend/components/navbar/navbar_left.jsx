import React from 'react';
import { Link } from 'react-router-dom';

// Show logo and profile user with their prof pic

const NavBarLeft = ({ currentUser, color, colorSplash, updateColor }) => {
    let logo = null;
    let profpicColor;
    if (color === "blue") {
        logo = window.logo_blue_url
        profpicColor = "profpicblue"
    } else if (color === "green") {
        logo = window.logo_green_url
        profpicColor = "profpicgreen"
    } else if (color === "red") {
        logo = window.logo_red_url
        profpicColor = "profpicred"
    }

    return (
        <div className="navbar_left">
            <div className="logo">
                <Link to="/">
                    <img src={logo} />
                </Link>
            </div>
            <div className={'navprofpic ' + profpicColor}>
                    <Link to={`/user/${currentUser.id}`}>
                        <img src={currentUser.profilePicUrl}/>
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