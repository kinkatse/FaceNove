import React from 'react';
import { Link } from 'react-router-dom';

import { logoImage } from '../../util/color_util';

const NavBarLeft = ({ currentUser }) => {
    return (
        <div className="navbar_left">
            <div className="logo">
                <Link to="/">
                    <img src={logoImage()} />
                </Link>
            </div>
            <div className='search'>
                <input className='search-bar' type="text" placeholder='Search FaceNove' />
            </div>
            {/* <div className={`navprofpic ${profPicColor()}`}>
                <Link to={`/user/${currentUser.id}`}>
                    <img src={currentUser.profilePicUrl}/>
                </Link>
            </div> */}
        </div>
    )
}

export default NavBarLeft;