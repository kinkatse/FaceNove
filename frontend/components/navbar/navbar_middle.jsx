import React from 'react';
import { Link } from 'react-router-dom';
import { homeImage, gitHubImage, linkedInImage } from '../../util/color_util';

// Show search bar eventually, but for now show greeting for user

const NavBarMiddle = ({ firstName, lastName}) => {
    return (
        <div className="navbar_middle">
            {/* <div className="greeting">
                Welcome, {`${firstName} ${lastName}`}
            </div> */}
            <div className="navbar-link">
                <Link to="/">
                    <img src={homeImage()} />
                </Link>
            </div>
            {/* <div className="navbar-link">
                // FOR USERS INDEX
                <a to="/">
                <img src={logoImage()} />
                </a>
            </div> */}
            <div className="navbar-link">
                <a href="https://github.com/kinkatse" target="_blank">
                    <img src={gitHubImage()} />
                </a>
            </div>
            <div className="navbar-link">
                <a href="https://www.linkedin.com/in/kin-ka-tse/" target="_blank">
                    <img src={linkedInImage()} />
                </a>
            </div>
        </div>
    )
}

export default NavBarMiddle;