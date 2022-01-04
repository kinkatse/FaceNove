import React from 'react';
import { Link } from 'react-router-dom';

// Show search bar eventually, but for now show greeting for user

const NavBarMiddle = ({ firstName, lastName, color }) => {
    return (
        <div className="navbar_middle">
            Welcome, {`${firstName} ${lastName}`}
        </div>
    )
}

export default NavBarMiddle;