import React from 'react';
import NavBarLeft from './navbar_left'
import NavBarMiddle from './navbar_middle'
import NavBarRight from './navbar_right'

const NavBar = ({ currentUser, firstName, lastName, logout, color, updateColor }) => {
    let colorSplash;
    if (color === 'blue') {
        colorSplash = 'bluesplash';
    } else if (color === 'green') {
        colorSplash = 'greensplash'
    } else if (color === 'red') {
        colorSplash = 'redsplash'
    }

    return (
        <div className="navbar_whole">
            <NavBarLeft currentUser={currentUser} color={color} colorSplash={colorSplash} updateColor={updateColor} />
            <NavBarMiddle firstName={firstName} lastName={lastName} color={color} />
            <NavBarRight logout={logout} colorSplash={colorSplash} />
        </div>
    )
}

export default NavBar;