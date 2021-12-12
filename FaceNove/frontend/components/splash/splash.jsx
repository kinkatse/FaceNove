import React from 'react';

import LogoSection from './logoSection';
import AuthForm from './authForm';
import Footer from './footer'

const Splash = () => (
    <div className="splash">
        <div className="splash-core">
            <LogoSection />
            <AuthForm />
        </div>
        <Footer />
    </div>
)

export default Splash;