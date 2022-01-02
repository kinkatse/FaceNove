import React from 'react';
import NavBarLeft from './navbar_left'
import NavBarMiddle from './navbar_middle'
import NavBarRight from './navbar_right'

const NavBar = ({ currentUser, firstName, lastName, email, logout }) => {
    return (
        <div className="navbar_whole">
            <NavBarLeft currentUser={currentUser} />
            <NavBarMiddle firstName={firstName} lastName={lastName} email={email} />
            <NavBarRight logout={logout} />
        </div>
    )
}

export default NavBar;