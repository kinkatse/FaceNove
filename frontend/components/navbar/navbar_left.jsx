import React from 'react';
import { Link } from 'react-router-dom';

import { logoImage } from '../../util/color_util';

const NavBarLeft = ({ currentUser }) => {
    let miniSearchOn = false
    let searchInput = null
    let searchBarEl = document.querySelector(".search-bar")
    let leftBarEl = document.querySelector(".navbar_left")
    debugger
    if (searchBarEl && leftBarEl &&
        (leftBarEl.offsetWidth - 20 < searchBarEl.offsetWidth )) {
            miniSearchOn = true
    }

    if (miniSearchOn) {
        searchInput = (
            <div className='search'>
                <input className='search-bar-mini' type="text" placeholder='O' />
            </div>
        )
    } else {
        searchInput = (
            <div className='search'>
                <input className='search-bar' type="text" placeholder='Search FaceNove' />
            </div>
        )
    }

    return (
        <div className="navbar_left">
            <div className="logo">
                <Link to="/">
                    <img src={logoImage()} />
                </Link>
            </div>
            {searchInput}
            {/* { miniSearchOn && (
                <div className='search'>
                    <input className='search-bar' type="text" placeholder='Search FaceNove' />
                </div>
            )} */}
            {/* <div className={`navprofpic ${profPicColor()}`}>
                <Link to={`/user/${currentUser.id}`}>
                    <img src={currentUser.profilePicUrl}/>
                </Link>
            </div> */}
        </div>
    )
}

export default NavBarLeft;