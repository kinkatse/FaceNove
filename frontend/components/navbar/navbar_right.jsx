import React from 'react';
import { Link } from 'react-router-dom';

// Show about links and log out

const NavBarRight = ({ logout, color }) => {
    let colorSplash;
    if (color === 'blue') {
        colorSplash = 'bluesplash';
    } else if (color === 'green') {
        colorSplash = 'greensplash'
    } else if (color === 'red') {
        colorSplash = 'redsplash'
    }
    
    return (
        <div className="navbar_right">
            <h1>This is right of navbar</h1>
            <button className={'logoutbuttontext splashbutton ' + colorSplash} onClick={logout}>Log Out!</button>
        </div>
    )
}

export default NavBarRight;