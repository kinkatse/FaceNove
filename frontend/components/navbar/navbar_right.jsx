import React from 'react';
import { Link } from 'react-router-dom';

// Show about links and log out

const NavBarRight = ({ logout }) => {
    return (
        <div className="navbar_right">
            <h1>This is right of navbar</h1>
            <button className="splashbutton" onClick={logout}>Log Out!</button>
        </div>
    )
}

export default NavBarRight;