import React from 'react';
import NavBarLeft from './navbar_left'
import NavBarMiddle from './navbar_middle'
import NavBarRight from './navbar_right'

const NavBar = ({ currentUser, firstName, lastName, logout, color, updateColor }) => {
    return (
        <div className="navbar_whole">
            <NavBarLeft currentUser={currentUser} color={color} updateColor={updateColor} />
            <NavBarMiddle firstName={firstName} lastName={lastName} color={color} />
            <NavBarRight logout={logout} color={color} />
        </div>
    )
}

export default NavBar;