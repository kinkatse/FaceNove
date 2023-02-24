import React from 'react';

import LogoSection from './logo_section';
import AuthForm from './auth_form'
import NavBarContainer from '../navbar/navbar_container'
import HomeContanier from '../home/home_container'
import Footer from './footer'

const Splash = (props) => {
    let currentUser = props.currentUser
    let splashComponent = '';
    if (currentUser.id) {
        splashComponent =
            <div className="splash">
                <div className="splash-background"></div>
                <NavBarContainer />
                <HomeContanier />
            </div>
    } else {
        splashComponent =
            <div className="splash">
                <div className="splash-background"></div>
                <div className="splash-top">
                    <div className="splash-core">
                        <LogoSection color={props.color} updateColor={props.updateColor}/>
                        <AuthForm />
                    </div>
                </div>
                <Footer />
            </div>
    }

    return (
        <div className="root">
            {splashComponent}
        </div>
    )
}

export default Splash;