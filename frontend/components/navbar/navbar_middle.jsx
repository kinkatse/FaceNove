import React from 'react';
import { Link } from 'react-router-dom';

// Show search bar eventually, but for now show greeting for user

const NavBarMiddle = ({ firstName, lastName, email }) => {
    return (
        <div className="navbar_middle">
            <h1>This is middle of navbar</h1>
        </div>
    )
}

export default NavBarMiddle;