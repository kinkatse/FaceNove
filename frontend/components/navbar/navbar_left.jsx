import React from 'react';
import { Link } from 'react-router-dom';

// Show logo and profile user with their prof pic

const NavBarLeft = ({ currentUser }) => {
    return (
        <div className="navbar_left">
            <h1>This is left of navbar</h1>
            <img src={window.logo_blue_url} />
            <img src={window.logo_green_url} />
            <img src={window.logo_red_url} />
        </div>
    )
}

export default NavBarLeft;