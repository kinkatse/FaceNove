import React from 'react';

import LogoSection from './logo_section';
import AuthForm from './auth_form';
import Footer from './footer'

const Splash = () => (
    <div className="splash">
        <div className="splash-background"></div>
        <div className="splash-core">
            <LogoSection />
            <AuthForm />
        </div>
        <Footer />
    </div>
)

export default Splash;