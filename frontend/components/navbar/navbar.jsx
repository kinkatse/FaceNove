import React from 'react';
import NavBarLeft from './navbar_left'
import NavBarMiddle from './navbar_middle'
import NavBarRight from './navbar_right'

const NavBar = ({ currentUser, firstName, lastName, logout, updateColor }) => {
    return (
        <div className="navbar_whole">
            <NavBarLeft currentUser={currentUser} />
            <NavBarMiddle firstName={firstName} lastName={lastName} />
            <NavBarRight logout={logout} updateColor={updateColor} />
        </div>
    )
}

export default NavBar;